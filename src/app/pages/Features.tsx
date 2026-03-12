import { motion } from 'framer-motion';
import { FeatureCard } from '../components/FeatureCard';
import { ImagePlus, MessageCircle, Send, UserPlus, Lock, Bell, Heart, Sparkles, Shield, Users } from 'lucide-react';

export function Features() {
  return (
    <div className="min-h-screen bg-black text-white pt-16">
      {/* Header */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Powerful Features
            </h1>
            <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto">
              Discover all the amazing features that make Vuma the best platform for sharing and connecting.
            </p>
          </motion.div>

          {/* Main Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            <FeatureCard
              icon={ImagePlus}
              title="Post Text, Images & Videos"
              description="Express yourself freely with rich media support. Share your stories through beautiful photos, engaging videos, or thoughtful text posts."
              delay={0}
            />
            <FeatureCard
              icon={MessageCircle}
              title="Chat Request System"
              description="A respectful way to connect. Send chat requests to people you'd like to talk to. No spam, no unsolicited messages—just meaningful connections."
              delay={0.1}
            />
            <FeatureCard
              icon={Lock}
              title="Anonymous Confession Posts"
              description="Share your thoughts without revealing your identity. A safe space to express what's on your mind without judgment or social pressure."
              delay={0.2}
            />
            <FeatureCard
              icon={Send}
              title="Private Messaging"
              description="Secure, encrypted conversations with your connections. Share moments, have meaningful discussions, and stay in touch privately."
              delay={0.3}
            />
            <FeatureCard
              icon={UserPlus}
              title="Discover New People"
              description="Find people who share your interests and passions. Our smart discovery algorithm helps you connect with like-minded individuals."
              delay={0.4}
            />
            <FeatureCard
              icon={Heart}
              title="Engage & React"
              description="Like, comment, and share posts that resonate with you. Show appreciation and start conversations with the community."
              delay={0.5}
            />
          </div>

          {/* Additional Features */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              More to Love
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <FeatureCard
                icon={Bell}
                title="Real-Time Notifications"
                description="Stay updated with instant notifications for messages, likes, and comments."
                delay={0}
              />
              <FeatureCard
                icon={Shield}
                title="Privacy Controls"
                description="Control who can see your posts and who can message you with granular privacy settings."
                delay={0.1}
              />
              <FeatureCard
                icon={Users}
                title="Community Guidelines"
                description="A safe, respectful environment enforced by clear community standards."
                delay={0.2}
              />
              <FeatureCard
                icon={Sparkles}
                title="Clean Interface"
                description="Beautiful, intuitive design that puts your content front and center."
                delay={0.3}
              />
            </div>
          </motion.div>

          {/* Feature Highlights */}
          <div className="space-y-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
            >
              <div className="bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-2xl p-8 border border-white/10">
                <h3 className="text-2xl font-bold mb-4">Privacy First</h3>
                <p className="text-gray-300 leading-relaxed">
                  Your privacy matters. With Vuma, you control what you share and who sees it.
                  Our chat request system ensures you only talk to people you want to connect with,
                  and anonymous confessions let you express yourself without fear.
                </p>
              </div>
              <div className="bg-gradient-to-br from-purple-500/20 to-pink-600/20 rounded-2xl p-8 border border-white/10">
                <h3 className="text-2xl font-bold mb-4">Built for Connection</h3>
                <p className="text-gray-300 leading-relaxed">
                  Vuma isn't just another social platform—it's a community. Our features are designed
                  to foster genuine connections, meaningful conversations, and authentic self-expression
                  in a safe, welcoming environment.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
