import { Link } from 'react-router';
import { motion } from 'framer-motion';
import { FeatureCard } from '../components/FeatureCard';
import { ImagePlus, MessageCircle, Send, UserPlus, Lock } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { COMPANY_NAME } from '../constants/company-name';

export function Home() {
  return (
    <div className="min-h-screen bg-black text-white pt-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                Connect Through Posts and Confessions
              </h1>
              <p className="text-gray-400 text-lg md:text-xl mb-8 leading-relaxed">
                Share text, photos, and videos while connecting with people around the world.
                Join {COMPANY_NAME} to discover a new way to express yourself and build meaningful connections.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/download"
                  className="px-8 py-4 bg-primary rounded-xl font-semibold hover:shadow-lg hover:shadow-accent/40 transition-all duration-300 text-center text-white hover:text-white/90"
                >
                  Download {COMPANY_NAME}
                </Link>
                <Link
                  to="/features"
                  className="px-8 py-4 bg-white/10 border border-white/20 rounded-xl font-semibold hover:bg-white/20 transition-all duration-300 text-center text-white hover:text-white/90"
                >
                  Explore Features
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-purple-600/20 rounded-3xl blur-3xl" />
              <div className="relative">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1758598304048-7bc68cf97c55?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydHBob25lJTIwbW9ja3VwJTIwbW9kZXJuJTIwYXBwJTIwaW50ZXJmYWNlfGVufDF8fHx8MTc3MzMxODMyOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Vuma app interface on smartphone"
                  className="w-full h-auto rounded-2xl"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Feature Preview Section */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Everything You Need
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              {COMPANY_NAME} brings together the best features to help you connect, share, and discover.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard
              icon={ImagePlus}
              title="Post Anything"
              description="Share your thoughts with text, stunning photos, or engaging videos. Express yourself in any way you choose."
              delay={0}
            />
            <FeatureCard
              icon={MessageCircle}
              title="Chat Requests"
              description="Connect with new people through a respectful chat request system. No unsolicited messages."
              delay={0.1}
            />
            <FeatureCard
              icon={Lock}
              title="Anonymous Confessions"
              description="Share your thoughts anonymously in a safe space. Express what's on your mind without judgment."
              delay={0.2}
            />
            <FeatureCard
              icon={Send}
              title="Private Messaging"
              description="Have meaningful conversations with end-to-end encrypted private messaging."
              delay={0.3}
            />
            <FeatureCard
              icon={UserPlus}
              title="Discover People"
              description="Find and connect with interesting people who share your passions and interests."
              delay={0.4}
            />
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 backdrop-blur-sm rounded-2xl p-6 border border-accent/30 flex items-center justify-center">
              <div className="text-center">
                <p className="text-white font-semibold mb-2">And More...</p>
                <Link to="/features" className="text-primary hover:text-accent text-sm">
                  View All Features →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl p-8 md:p-12 border border-white/10 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Join {COMPANY_NAME}?
            </h2>
            <p className="text-gray-300 text-lg mb-8">
              Download the app today and start connecting with people who matter.
            </p>
            <Link
              to="/download"
              className="inline-block text-white hover:text-white/90 px-8 py-4 bg-primary rounded-xl font-semibold hover:shadow-lg hover:shadow-accent/40 transition-all duration-300"
            >
              Get Started Now
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
