import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from 'react-router-dom'

const ResponsiveNavbar = ({ open, setOpen }) => {
    useEffect(() => {
        if (open) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        return () => {
            document.body.style.overflow = "auto";
        };
    }, [open]);

    const handleLinkClick = () => {
        setOpen(false);
    };

    return (
        <AnimatePresence>
            {open && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="absolute top-20 left-0 font-Basic w-full h-screen z-50 bg-white shadow-lg"
                >
                    <ul className="flex flex-col items-center text-3xl font-bold p-5 gap-10">
                        <li>
                            <Link to='/' onClick={handleLinkClick}>Home</Link>
                        </li>
                        <li>
                            <Link to='/team' onClick={handleLinkClick}>Team</Link>
                        </li>
                    </ul>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default ResponsiveNavbar;