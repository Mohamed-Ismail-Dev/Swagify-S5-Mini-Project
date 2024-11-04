import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSnapshot } from 'valtio';
import state from '../store';
import CustomButton from '../components/CustomButton';
import {
    headContainerAnimation,
    headContentAnimation,
    headTextAnimation,
    slideAnimation
} from '../config/motion';

const Home = () => {
    const snap = useSnapshot(state);

    return (
        <AnimatePresence>
            {snap.intro && (
                <motion.section className='home' {...slideAnimation('left')}>
                    <motion.header {...slideAnimation('down')}>
                        <img 
                            src='./logo.png'
                            alt="logo"
                            className='w-24 h-24 object-contain'
                        />
                    </motion.header>

                    <motion.div className='home-content' {...headContainerAnimation}>
                       <motion.div {...headTextAnimation} className='flex items-start'>
                            <motion.h1
                                className='head-text text-6xl leading-[5rem] transform scale-y-[2] text-gradient'
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 1.5 }}
                            >
                                BE
                            </motion.h1>
                            <div className='ml-5 flex flex-col'>
                                <motion.h1
                                    className='head-text text1-3xl leading-[3rem] text-gradient'
                                    initial={{ y: -20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ duration: 1.2, delay: 0.3 }}
                                >
                                    Bold
                                </motion.h1>
                                <motion.h1
                                    className='head-text text2-3xl leading-[7rem] text-gradient'
                                    initial={{ y: -20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ duration: 1.2, delay: 0.5 }}
                                >
                                    You
                                </motion.h1>
                                <motion.h1
                                    className='head-text text3-3xl leading-[5rem] text-gradient'
                                    initial={{ y: -20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ duration: 1.2, delay: 0.7 }}
                                >
                                    Swagified!
                                </motion.h1>
                            </div>
                        </motion.div>

                        <motion.div
                            {...headContentAnimation}
                            className='flex flex-col gap-5'
                        >
                            <p className='max-w-md font-normal text-gray-600 text-base'>
                                Unveil your creativity with our
                                brand-new 3D customization 
                                tool for T-shirts. <strong>Craft your signature 
                                look</strong>{" "} and wear your individuality 
                                with confidence.
                            </p>

                            <CustomButton
                                type="filled"
                                title="Customize Now  -->"
                                handleClick={() => state.intro = false}
                                customStyles="w-fit px-4 py-2.5 font-bold text-sm"
                            />
                        </motion.div>
                    </motion.div>
                </motion.section>
            )}
        </AnimatePresence>
    );
};

export default Home;
