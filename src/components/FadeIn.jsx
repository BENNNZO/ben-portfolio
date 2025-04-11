import { motion } from "framer-motion"

export default function FadeIn({ children, delay, duration }) {
    return (
        <motion.div 
            className=""
            initial={{ opacity: 0, y: 50 }} 
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: duration ? duration : 0.5, delay: delay + 0.1 ? delay : 0.1 }}
            viewport={{ amount: 0 }}
        >
            {children}
        </motion.div>
    )
}