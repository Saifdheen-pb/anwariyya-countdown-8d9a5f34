const MosqueSilhouette = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 pointer-events-none z-0 opacity-[0.06]">
      <svg
        viewBox="0 0 1440 200"
        className="w-full h-auto"
        preserveAspectRatio="xMidYMax slice"
      >
        <defs>
          <linearGradient id="mosqueGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="hsl(43 80% 55%)" />
            <stop offset="100%" stopColor="hsl(43 60% 35%)" />
          </linearGradient>
        </defs>
        
        {/* Main mosque silhouette */}
        <path
          fill="url(#mosqueGradient)"
          d="M0,200 L0,180 
             L100,180 L100,160 
             L120,160 L130,140 L140,160 L160,160 L160,180
             L300,180 L300,150 
             L320,150 L340,100 L360,150 L380,150 L380,180
             L500,180 L500,170
             L520,170 L530,150 L540,170 L560,170 L560,180
             L650,180 L650,120
             L680,120 L700,60 L720,60 L740,60 L760,120 L790,120 L790,180
             L900,180 L900,160
             L920,160 L930,140 L940,160 L960,160 L960,180
             L1100,180 L1100,150
             L1120,150 L1140,100 L1160,150 L1180,150 L1180,180
             L1300,180 L1300,170
             L1320,170 L1330,155 L1340,170 L1360,170 L1360,180
             L1440,180 L1440,200 Z"
        />
        
        {/* Central dome */}
        <ellipse
          cx="720"
          cy="70"
          rx="35"
          ry="30"
          fill="url(#mosqueGradient)"
        />
        
        {/* Crescent on main dome */}
        <path
          d="M720,35 Q730,40 728,50 Q718,45 720,35"
          fill="url(#mosqueGradient)"
        />
        
        {/* Minarets crescents */}
        <circle cx="340" cy="95" r="4" fill="url(#mosqueGradient)" />
        <circle cx="1140" cy="95" r="4" fill="url(#mosqueGradient)" />
      </svg>
    </div>
  );
};

export default MosqueSilhouette;
