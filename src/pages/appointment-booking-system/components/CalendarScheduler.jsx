import React, { useState } from 'react';
import { format, addDays, startOfWeek, isSameDay, addMonths, subMonths } from 'date-fns';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';

const CalendarScheduler = ({ selectedService }) => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [meetingPlatform, setMeetingPlatform] = useState('zoom');
  const [showContactForm, setShowContactForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    businessContext: ''
  });

  // Generate available time slots
  const timeSlots = [
    '09:00 AM', '09:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
    '01:00 PM', '01:30 PM', '02:00 PM', '02:30 PM', '03:00 PM', '03:30 PM',
    '04:00 PM', '04:30 PM'
  ];

  // Generate calendar days
  const generateCalendarDays = () => {
    const startDate = startOfWeek(currentMonth);
    const days = [];
    for (let i = 0; i < 35; i++) {
      days?.push(addDays(startDate, i));
    }
    return days;
  };

  const handleDateSelect = (date) => {
    setSelectedDate(date);
    setSelectedTime(null);
    setShowContactForm(false);
  };

  const handleTimeSelect = (time) => {
    setSelectedTime(time);
  };

  const handleContinueToForm = () => {
    if (selectedDate && selectedTime && meetingPlatform) {
      setShowContactForm(true);
      setTimeout(() => {
        document?.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  const handleFormChange = (e) => {
    setFormData({
      ...formData,
      [e?.target?.name]: e?.target?.value
    });
  };

  const handleSubmit = (e) => {
    e?.preventDefault();
    // Here you would integrate with your booking API
    alert(`Booking confirmed!\nDate: ${format(selectedDate, 'MMMM dd, yyyy')}\nTime: ${selectedTime}\nPlatform: ${meetingPlatform}\n\nWe'll send a confirmation email to ${formData?.email} shortly.`);
  };

  const calendarDays = generateCalendarDays();
  const today = new Date();

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-50 rounded-full mb-4">
            <Icon name="Calendar" size={16} color="#6B46C1" />
            <span className="text-sm font-medium text-purple-700">Step 2: Choose Date & Time</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Schedule Your {selectedService?.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Select your preferred date, time, and meeting platform. We'll send you a calendar invite with all the details.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Calendar */}
          <div className="lg:col-span-2 bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-gray-900">
                {format(currentMonth, 'MMMM yyyy')}
              </h3>
              <div className="flex gap-2">
                <button
                  onClick={() => setCurrentMonth(subMonths(currentMonth, 1))}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <Icon name="ChevronLeft" size={20} />
                </button>
                <button
                  onClick={() => setCurrentMonth(addMonths(currentMonth, 1))}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <Icon name="ChevronRight" size={20} />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-7 gap-2 mb-2">
              {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']?.map((day) => (
                <div key={day} className="text-center text-sm font-semibold text-gray-600 py-2">
                  {day}
                </div>
              ))}
            </div>

            <div className="grid grid-cols-7 gap-2">
              {calendarDays?.map((day, index) => {
                const isToday = isSameDay(day, today);
                const isSelected = selectedDate && isSameDay(day, selectedDate);
                const isPast = day < today && !isToday;
                const isCurrentMonth = day?.getMonth() === currentMonth?.getMonth();

                return (
                  <button
                    key={index}
                    onClick={() => !isPast && isCurrentMonth && handleDateSelect(day)}
                    disabled={isPast || !isCurrentMonth}
                    className={`
                      aspect-square p-2 rounded-lg text-sm font-medium transition-all
                      ${isPast || !isCurrentMonth ? 'text-gray-300 cursor-not-allowed' : 'hover:bg-purple-50 cursor-pointer'}
                      ${isToday ? 'bg-blue-50 text-blue-700 ring-2 ring-blue-200' : ''}
                      ${isSelected ? 'bg-purple-600 text-white hover:bg-purple-700' : 'text-gray-900'}
                    `}
                  >
                    {format(day, 'd')}
                  </button>
                );
              })}
            </div>

            {selectedDate && (
              <div className="mt-6 pt-6 border-t border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-4">
                  Available times for {format(selectedDate, 'MMMM dd, yyyy')}
                </h4>
                <div className="grid grid-cols-4 gap-2">
                  {timeSlots?.map((time) => (
                    <button
                      key={time}
                      onClick={() => handleTimeSelect(time)}
                      className={`
                        px-4 py-2 rounded-lg text-sm font-medium transition-all
                        ${selectedTime === time
                          ? 'bg-purple-600 text-white' :'bg-gray-50 text-gray-700 hover:bg-purple-50 hover:text-purple-700'
                        }
                      `}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Summary & Platform Selection */}
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Booking Summary</h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Icon name={selectedService?.icon} size={20} color="#6B46C1" className="mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900">{selectedService?.title}</p>
                    <p className="text-sm text-gray-600">{selectedService?.duration}</p>
                  </div>
                </div>

                {selectedDate && (
                  <div className="flex items-start gap-3">
                    <Icon name="Calendar" size={20} color="#6B46C1" className="mt-1" />
                    <div>
                      <p className="font-semibold text-gray-900">{format(selectedDate, 'MMMM dd, yyyy')}</p>
                      <p className="text-sm text-gray-600">
                        {selectedTime || 'Select a time slot'}
                      </p>
                    </div>
                  </div>
                )}

                <div className="pt-4 border-t border-gray-200">
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Choose Meeting Platform
                  </label>
                  <div className="space-y-2">
                    {[
                      { value: 'zoom', label: 'Zoom Meeting', icon: 'Video' },
                      { value: 'google-meet', label: 'Google Meet', icon: 'Video' },
                      { value: 'phone', label: 'Phone Call', icon: 'Phone' }
                    ]?.map((platform) => (
                      <button
                        key={platform?.value}
                        onClick={() => setMeetingPlatform(platform?.value)}
                        className={`
                          w-full flex items-center gap-3 p-3 rounded-lg border-2 transition-all
                          ${meetingPlatform === platform?.value
                            ? 'border-purple-600 bg-purple-50' :'border-gray-200 hover:border-purple-200'
                          }
                        `}
                      >
                        <Icon 
                          name={platform?.icon} 
                          size={20} 
                          color={meetingPlatform === platform?.value ? '#6B46C1' : '#6B7280'} 
                        />
                        <span className={`font-medium ${
                          meetingPlatform === platform?.value ? 'text-purple-900' : 'text-gray-700'
                        }`}>
                          {platform?.label}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                {selectedDate && selectedTime && meetingPlatform && (
                  <Button
                    variant="default"
                    className="w-full"
                    onClick={handleContinueToForm}
                    iconName="ArrowRight"
                    iconPosition="right"
                  >
                    Continue to Contact Info
                  </Button>
                )}
              </div>
            </div>

            <div className="bg-purple-50 rounded-xl p-6">
              <div className="flex items-start gap-3">
                <Icon name="Info" size={20} color="#6B46C1" className="mt-1" />
                <div>
                  <p className="text-sm font-medium text-purple-900 mb-2">What to Prepare</p>
                  <ul className="text-sm text-purple-800 space-y-1">
                    <li>• Your business goals & challenges</li>
                    <li>• Current metrics (if available)</li>
                    <li>• Questions for our team</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        {showContactForm && (
          <div id="contact-form" className="mt-12 max-w-3xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-50 rounded-full mb-4">
                  <Icon name="User" size={16} color="#6B46C1" />
                  <span className="text-sm font-medium text-purple-700">Step 3: Contact Information</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Almost Done! Tell Us About Yourself
                </h3>
                <p className="text-gray-600">
                  We'll use this info to prepare for your consultation and send meeting details.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <Input
                    type="text"
                    name="name"
                    label="Full Name"
                    placeholder="John Smith"
                    value={formData?.name}
                    onChange={handleFormChange}
                    required
                  />
                  <Input
                    type="email"
                    name="email"
                    label="Email Address"
                    placeholder="john@startup.com"
                    value={formData?.email}
                    onChange={handleFormChange}
                    required
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <Input
                    type="text"
                    name="company"
                    label="Company Name"
                    placeholder="Startup Inc."
                    value={formData?.company}
                    onChange={handleFormChange}
                    required
                  />
                  <Input
                    type="tel"
                    name="phone"
                    label="Phone Number"
                    placeholder="+1 (555) 123-4567"
                    value={formData?.phone}
                    onChange={handleFormChange}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    What would you like to focus on? (Optional)
                  </label>
                  <textarea
                    name="businessContext"
                    value={formData?.businessContext}
                    onChange={handleFormChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="Tell us about your business, goals, and any specific challenges you're facing..."
                  />
                </div>

                <div className="flex items-start gap-3 p-4 bg-blue-50 rounded-lg">
                  <Icon name="Shield" size={20} color="#2563EB" className="mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-blue-900">
                    Your information is secure and will only be used for this consultation. We never share your data with third parties.
                  </p>
                </div>

                <div className="flex gap-4">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setShowContactForm(false)}
                    iconName="ArrowLeft"
                    iconPosition="left"
                  >
                    Back to Calendar
                  </Button>
                  <Button
                    type="submit"
                    variant="default"
                    className="flex-1"
                    iconName="Check"
                    iconPosition="right"
                  >
                    Confirm Booking
                  </Button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default CalendarScheduler;