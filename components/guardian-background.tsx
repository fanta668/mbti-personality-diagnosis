"use client"

import { motion } from "framer-motion"

export function GuardianBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ backgroundColor: '#fafcfc' }}>
      {/* Large shield shape - top right */}
      <motion.svg
        className="absolute -top-20 -right-32 w-[500px] h-[500px] opacity-[0.08]"
        viewBox="0 0 200 200"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.08, scale: 1 }}
        transition={{ duration: 1.5 }}
      >
        <motion.path
          d="M100 10 L180 50 L180 110 Q180 160 100 190 Q20 160 20 110 L20 50 Z"
          fill="#3d9e8f"
          animate={{ 
            d: [
              "M100 10 L180 50 L180 110 Q180 160 100 190 Q20 160 20 110 L20 50 Z",
              "M100 15 L175 52 L178 108 Q175 158 100 185 Q25 158 22 108 L25 52 Z",
              "M100 10 L180 50 L180 110 Q180 160 100 190 Q20 160 20 110 L20 50 Z"
            ]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.svg>

      {/* Floating circles - representing protection */}
      <motion.div
        className="absolute top-32 left-[10%] w-20 h-20 rounded-full bg-teal/10"
        animate={{ y: [0, -15, 0], x: [0, 5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-48 left-[5%] w-12 h-12 rounded-full bg-blue/10"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
      
      {/* Concentric rings - representing layers of protection */}
      <motion.div
        className="absolute top-[20%] right-[15%] w-32 h-32"
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      >
        <div className="absolute inset-0 rounded-full border-2 border-teal/10" />
        <div className="absolute inset-3 rounded-full border-2 border-teal/8" />
        <div className="absolute inset-6 rounded-full border-2 border-teal/6" />
      </motion.div>

      {/* Small shield icons scattered */}
      <motion.svg
        className="absolute top-[40%] left-[8%] w-16 h-16 opacity-[0.12]"
        viewBox="0 0 24 24"
        animate={{ y: [0, -8, 0], rotate: [-3, 3, -3] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      >
        <path
          d="M12 2L4 6v6c0 5.5 3.5 10.5 8 12 4.5-1.5 8-6.5 8-12V6l-8-4z"
          fill="#3d9e8f"
        />
      </motion.svg>

      <motion.svg
        className="absolute top-[60%] right-[12%] w-12 h-12 opacity-[0.10]"
        viewBox="0 0 24 24"
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      >
        <path
          d="M12 2L4 6v6c0 5.5 3.5 10.5 8 12 4.5-1.5 8-6.5 8-12V6l-8-4z"
          fill="#4a8ab8"
        />
      </motion.svg>

      {/* Organic blob shapes */}
      <motion.div
        className="absolute bottom-[30%] left-[3%] w-40 h-40 bg-gradient-to-br from-teal/8 to-blue/5 blob-1"
        animate={{ 
          scale: [1, 1.1, 1],
          rotate: [0, 5, 0]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute bottom-[10%] right-[5%] w-48 h-48 bg-gradient-to-tr from-purple/6 to-teal/4 blob-2"
        animate={{ 
          scale: [1, 1.08, 1],
          rotate: [0, -3, 0]
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      {/* Dotted pattern - subtle texture */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'radial-gradient(#3d9e8f 1px, transparent 1px)',
        backgroundSize: '32px 32px'
      }} />

      {/* Soft gradient overlay at top */}
      <div 
        className="absolute top-0 left-0 right-0 h-[400px]"
        style={{
          background: 'linear-gradient(180deg, rgba(61, 158, 143, 0.04) 0%, transparent 100%)'
        }}
      />

      {/* Floating heart shapes - representing care */}
      <motion.div
        className="absolute top-[70%] left-[20%] text-teal/15 text-2xl"
        animate={{ y: [0, -10, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
        </svg>
      </motion.div>

      <motion.div
        className="absolute top-[45%] right-[20%] text-pink/12 text-xl"
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
      >
        <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
        </svg>
      </motion.div>

      {/* Connection lines - representing bonds */}
      <svg className="absolute top-0 left-0 w-full h-full opacity-[0.04]">
        <motion.line
          x1="10%" y1="30%" x2="25%" y2="50%"
          stroke="#3d9e8f"
          strokeWidth="1"
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.line
          x1="80%" y1="20%" x2="70%" y2="40%"
          stroke="#4a8ab8"
          strokeWidth="1"
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 5, repeat: Infinity, delay: 1 }}
        />
      </svg>
    </div>
  )
}
