import React from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Landing = () => {
  return (
    <div className="bg-gradient-to-br from-pink-100 via-white to-pink-50 dark:from-[#0D0D0D] dark:via-[#0D0D0D] dark:to-[#0D0D0D] text-gray-900 dark:text-gray-100">
      {/* Home Section */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden"
      >
        <motion.img
          src={process.env.PUBLIC_URL + "/admiree-logo.jpg"}
          alt="Admiree Background"
          className="absolute w-[680px] h-[680px] opacity-10 object-contain"
          animate={{
            y: [0, -30, 0],
            rotate: [0, 15, -15, 0],
            opacity: [0.08, 0.12, 0.08],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="relative z-10 max-w-2xl w-full text-center">
          <motion.div
            className="w-36 h-36 rounded-full overflow-hidden bg-white shadow-lg mx-auto mb-6 flex items-center justify-center"
            whileHover={{ scale: 1.08, rotate: 5 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <img
              className="w-full h-full object-cover"
              src={process.env.PUBLIC_URL + "/admiree-logo.jpg"}
              alt="Admiree"
            />
          </motion.div>
          <motion.h1
            className="text-5xl font-extrabold text-gray-800 mb-2 tracking-tight"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Admiree
          </motion.h1>
          <motion.p
            className="text-pink-600 text-lg font-medium mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Positive Pulse — share your mood, lift someone’s day.
          </motion.p>
          <motion.p
            className="text-gray-700 mb-10 text-base leading-relaxed px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            Admiree is a joyful digital space designed to spread positivity and
            kindness. Express your feelings, share inspiring thoughts, and
            appreciate someone’s efforts.
          </motion.p>
          <motion.div
            className="flex gap-4 justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <Button
              component={Link}
              to="/signup"
              variant="contained"
              sx={{
                bgcolor: "#e91e63",
                borderRadius: "24px",
                px: 4,
                py: 1.2,
                textTransform: "none",
                fontWeight: "bold",
                fontSize: "1rem",
                "&:hover": { bgcolor: "#d81b60" },
              }}
            >
              Get Started
            </Button>
            <Button
              component={Link}
              to="/signin"
              variant="outlined"
              sx={{
                borderRadius: "24px",
                px: 4,
                py: 1.2,
                textTransform: "none",
                fontWeight: "bold",
                fontSize: "1rem",
                borderColor: "#e91e63",
                color: "#e91e63",
                "&:hover": { borderColor: "#d81b60", color: "#d81b60" },
              }}
            >
              Sign In
            </Button>
            <Button
              component={Link}
              to="/contact"
              variant="text"
              sx={{
                textTransform: 'none',
                color: '#6b7280',
                '&:hover': { color: '#e91e63' }
              }}
            >
              Contact Us
            </Button>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="max-w-5xl mx-auto px-6 py-24 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">About Admiree</h2>
        <p className="text-gray-700 leading-relaxed max-w-3xl mx-auto mb-10">
          Admiree is more than a platform — it’s a positive movement. Our goal
          is to build a kind-hearted social community where people celebrate
          happiness, express gratitude, and find motivation in others’ stories.
          Every post you share spreads a spark of positivity that can brighten
          someone’s entire day.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-10">
          <div className="bg-white/60 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-pink-100">
            <h3 className="text-xl font-semibold text-pink-600 mb-3">
              🌸 Inspire
            </h3>
            <p className="text-gray-700 text-sm">
              Share heartfelt messages and uplifting thoughts that inspire
              others to keep going.
            </p>
          </div>
          <div className="bg-white/60 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-pink-100">
            <h3 className="text-xl font-semibold text-pink-600 mb-3">
              💬 Connect
            </h3>
            <p className="text-gray-700 text-sm">
              Engage with a community that values positivity, encouragement, and
              emotional well-being.
            </p>
          </div>
          <div className="bg-white/60 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-pink-100">
            <h3 className="text-xl font-semibold text-pink-600 mb-3">
              💖 Appreciate
            </h3>
            <p className="text-gray-700 text-sm">
              Show appreciation for others’ good deeds and small victories that
              make the world kinder.
            </p>
          </div>
        </div>
      </section>

      {/* Verify Section */}
      <section
        id="verify"
        className="max-w-5xl mx-auto px-6 pb-24 text-center"
      >
        <h2 className="text-4xl font-bold text-gray-800 mb-6">
          Get Verified on Admiree
        </h2>
        <p className="text-gray-700 leading-relaxed max-w-3xl mx-auto mb-8">
          Becoming verified on Admiree shows your dedication to spreading
          positivity and building trust within the community. Verified users get
          special recognition and access to exclusive features that help you
          share even more joy and inspiration.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-10">
          <div className="bg-white/60 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-pink-100">
            <h3 className="text-xl font-semibold text-pink-600 mb-3">
              🌟 Premium Recognition
            </h3>
            <p className="text-gray-700 text-sm">
              Stand out as a trusted positivity ambassador and inspire more
              people to join your circle.
            </p>
          </div>
          <div className="bg-white/60 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-pink-100">
            <h3 className="text-xl font-semibold text-pink-600 mb-3">
              🎁 Exclusive Features
            </h3>
            <p className="text-gray-700 text-sm">
              Access advanced tools, personalized badges, and enhanced profile
              customization options.
            </p>
          </div>
        </div>

        <Button
          component={Link}
          to="/signup"
          variant="contained"
          sx={{
            bgcolor: "#e91e63",
            borderRadius: "24px",
            px: 5,
            py: 1.3,
            textTransform: "none",
            fontWeight: "bold",
            "&:hover": { bgcolor: "#d81b60" },
          }}
        >
          Join the Verified Community
        </Button>
      </section>

      {/* Footer */}
      <footer className="border-t bg-white/70">
        <div className="max-w-5xl mx-auto px-6 py-6 text-center text-sm text-gray-600">
          © 2025 Admiree — Spreading Positivity, One Post at a Time 💫
        </div>
      </footer>
    </div>
  );
};

export default Landing;
