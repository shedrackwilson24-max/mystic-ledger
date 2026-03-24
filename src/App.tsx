/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Web3Provider } from './components/Web3Provider';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Trending } from './components/Trending';
import { Marketplace } from './components/Marketplace';
import { CreateNFT } from './components/CreateNFT';
import { Staking } from './components/Staking';
import { Footer } from './components/Footer';
import { NebulaBackground } from './components/NebulaBackground';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  return (
    <Web3Provider>
      <div className="min-h-screen relative">
        <NebulaBackground />
        <Navbar />
        
        <main>
          <Hero />
          <Trending />
          
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <Marketplace />
              <CreateNFT />
              <Staking />
            </motion.div>
          </AnimatePresence>
        </main>

        <Footer />
      </div>
    </Web3Provider>
  );
}
