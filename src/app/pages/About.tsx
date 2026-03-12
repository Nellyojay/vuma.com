import { motion } from 'framer-motion';
import { Target, Heart, Shield, Users } from 'lucide-react';
import { COMPANY_NAME } from '../constants/company-name';

export function About() {
  return (
    <div className="min-h-screen bg-black text-white pt-16">
      {/* Hero Section */}
      <section className="py-20 md:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              About {COMPANY_NAME}
            </h1>
            <p className="text-gray-400 text-lg md:text-xl leading-relaxed">
              A new way to connect, share, and discover meaningful relationships online.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="bg-gradient-to-br from-primary/50 to-accent/20 rounded-2xl p-8 md:p-12 border border-white/10 mb-16"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Our Story</h2>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                {COMPANY_NAME} was born from a simple idea: social media should bring people together,
                not push them apart. In a world where online interactions often feel superficial
                and overwhelming, we wanted to create something different.
              </p>
              <p>
                We built {COMPANY_NAME} to be a platform where authenticity matters, where privacy is respected,
                and where meaningful connections can flourish. Whether you're sharing a moment through
                a photo, expressing your thoughts anonymously, or having a real conversation with someone
                new, {COMPANY_NAME} is designed to make those experiences better.
              </p>
              <p>
                Our chat request system ensures that every conversation starts with mutual interest.
                Our anonymous confession feature gives you a safe space to be vulnerable. And our
                commitment to privacy means your data is yours, always.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What We Stand For
            </h2>
            <p className="text-gray-400 text-lg">
              Our core values guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10 text-center"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-secondary to-accent flex items-center justify-center mx-auto mb-4">
                <Target className="text-white" size={24} />
              </div>
              <h3 className="text-white font-semibold mb-2">Purpose</h3>
              <p className="text-gray-400 text-sm">
                Connecting people through authentic, meaningful interactions
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10 text-center"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-secondary to-accent flex items-center justify-center mx-auto mb-4">
                <Heart className="text-white" size={24} />
              </div>
              <h3 className="text-white font-semibold mb-2">Respect</h3>
              <p className="text-gray-400 text-sm">
                Treating every user with dignity and fostering kindness
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10 text-center"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-secondary to-accent flex items-center justify-center mx-auto mb-4">
                <Shield className="text-white" size={24} />
              </div>
              <h3 className="text-white font-semibold mb-2">Privacy</h3>
              <p className="text-gray-400 text-sm">
                Your data is yours. We protect it with the highest standards
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10 text-center"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-secondary to-accent flex items-center justify-center mx-auto mb-4">
                <Users className="text-white" size={24} />
              </div>
              <h3 className="text-white font-semibold mb-2">Community</h3>
              <p className="text-gray-400 text-sm">
                Building a safe, welcoming space for everyone
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-primary/50 to-accent/20 rounded-2xl p-8 md:p-12 border border-white/10 text-center"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              To create a social platform that prioritizes genuine human connection over engagement metrics.
              We believe in giving people control over their privacy, fostering respectful interactions,
              and providing tools that enable authentic self-expression. Vuma is more than an app—it's
              a commitment to making social media better for everyone.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Highlight */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              How We're Different
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
            >
              <h3 className="text-xl font-bold mb-4 text-blue-400">Chat Requests</h3>
              <p className="text-gray-300 leading-relaxed">
                No more unwanted messages from followers. Connect only with people who mutually want to talk.
                It's respectful, safe, and puts you in control.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
            >
              <h3 className="text-xl font-bold mb-4 text-primary">Anonymous Confessions</h3>
              <p className="text-gray-300 leading-relaxed">
                Express yourself freely without judgment. Our anonymous posting feature creates
                a safe space for vulnerability and honest sharing.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
            >
              <h3 className="text-xl font-bold mb-4 text-pink-400">Privacy First</h3>
              <p className="text-gray-300 leading-relaxed">
                Your data stays yours. We don't sell your information, and you control exactly
                who sees what you share. Privacy isn't an afterthought—it's our foundation.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
