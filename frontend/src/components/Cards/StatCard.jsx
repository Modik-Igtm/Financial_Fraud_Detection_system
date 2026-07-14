import { motion } from "framer-motion";

export default function StatCard({
    title,
    value,
    icon,
    color,
    percentage
}) {
    return (
        <motion.div
            whileHover={{ scale: 1.03 }}
            className="bg-[#131D32]/80 backdrop-blur-xl
            border border-cyan-500/10
            rounded-3xl
            p-6
            shadow-xl
            transition-all"
        >
            <div className="flex justify-between items-center">

                <div>

                    <p className="text-gray-400">
                        {title}
                    </p>

                    <h2 className="text-4xl font-bold mt-3">
                        {value}
                    </h2>

                    <p className="text-sm mt-2 text-green-400">
                        ↑ {percentage}
                    </p>

                </div>

                <div
                    className={`w-16 h-16 rounded-2xl flex items-center justify-center ${color}`}
                >
                    {icon}
                </div>

            </div>

        </motion.div>
    );
}