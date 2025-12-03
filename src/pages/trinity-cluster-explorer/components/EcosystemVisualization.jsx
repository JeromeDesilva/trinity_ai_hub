import React, { useState } from 'react';


const EcosystemVisualization = ({ clusters, activeCluster, onClusterSelect }) => {
  const [hoveredCluster, setHoveredCluster] = useState(null);

  const centerX = 250;
  const centerY = 250;
  const radius = 140;

  const getPosition = (index, total) => {
    const angle = (index * 2 * Math.PI) / total - Math.PI / 2;
    return {
      x: centerX + radius * Math.cos(angle),
      y: centerY + radius * Math.sin(angle)
    };
  };

  return (
    <div className="relative w-full max-w-2xl mx-auto aspect-square">
      <svg className="w-full h-full" viewBox="0 0 500 500">
        <defs>
          <linearGradient id="centerGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#6B46C1" />
            <stop offset="50%" stopColor="#3B82F6" />
            <stop offset="100%" stopColor="#EC4899" />
          </linearGradient>
          {clusters?.map((cluster, index) => (
            <linearGradient key={index} id={`gradient-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={cluster?.gradientStart} />
              <stop offset="100%" stopColor={cluster?.gradientEnd} />
            </linearGradient>
          ))}
        </defs>

        <circle
          cx={centerX}
          cy={centerY}
          r="60"
          fill="url(#centerGradient)"
          className="animate-pulse"
          style={{ animationDuration: '3s' }}
        />

        <text
          x={centerX}
          y={centerY - 10}
          textAnchor="middle"
          fill="white"
          fontSize="18"
          fontWeight="bold"
        >
          Trinity
        </text>
        <text x={centerX} y={centerY + 10} textAnchor="middle" fill="white" fontSize="12">
          AI Hub
        </text>

        {clusters?.map((cluster, index) => {
          const pos = getPosition(index, clusters?.length);
          const isActive = activeCluster?.id === cluster?.id;
          const isHovered = hoveredCluster === cluster?.id;

          return (
            <g key={cluster?.id}>
              <line
                x1={centerX}
                y1={centerY}
                x2={pos?.x}
                y2={pos?.y}
                stroke={isActive || isHovered ? cluster?.gradientStart : '#E5E7EB'}
                strokeWidth={isActive ? '3' : '2'}
                strokeDasharray={isActive ? '0' : '5,5'}
                className="transition-all duration-300"
              />
              <circle
                cx={pos?.x}
                cy={pos?.y}
                r={isActive ? '50' : isHovered ? '45' : '40'}
                fill={`url(#gradient-${index})`}
                className="cursor-pointer transition-all duration-300"
                style={{
                  filter: isActive || isHovered ? 'drop-shadow(0 8px 16px rgba(0,0,0,0.2))' : 'none'
                }}
                onClick={() => onClusterSelect(cluster)}
                onMouseEnter={() => setHoveredCluster(cluster?.id)}
                onMouseLeave={() => setHoveredCluster(null)}
              />
              <text
                x={pos?.x}
                y={pos?.y + 5}
                textAnchor="middle"
                fill="white"
                fontSize="12"
                fontWeight="600"
                className="pointer-events-none"
              >
                {cluster?.shortName}
              </text>
            </g>
          );
        })}
      </svg>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-card/95 backdrop-blur-sm border border-border rounded-lg px-4 py-2 shadow-lg">
        <p className="text-xs text-muted-foreground text-center">
          Click on any cluster to explore its services and capabilities
        </p>
      </div>
    </div>
  );
};

export default EcosystemVisualization;