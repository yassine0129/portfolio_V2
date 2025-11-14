import { motion } from 'framer-motion';
import { useState } from 'react';

interface TimelineItem {
  date: string;
  title: string;
  subtitle: string;
  location: string;
  description: string;
  color: string;
}

interface TimelineProps {
  items: TimelineItem[];
  title: string;
}

export const Timeline = ({ items, title }: TimelineProps) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="w-full">
      <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-2">
        <div className="w-1 h-8 bg-blue-600 rounded"></div>
        {title}
      </h3>

      <div className="space-y-6">
        {items.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.1 }}
            onClick={() => setActiveIndex(idx)}
            className="cursor-pointer"
          >
            <div className={`relative pl-8 pb-8 ${idx !== items.length - 1 ? 'border-l-2 border-gray-300' : ''}`}>
              <motion.div
                className={`absolute left-0 top-0 w-4 h-4 rounded-full -translate-x-2.5 ${item.color} cursor-pointer`}
                whileHover={{ scale: 1.3 }}
                whileTap={{ scale: 0.9 }}
              />

              <motion.div
                animate={{ maxHeight: activeIndex === idx ? 300 : 0, opacity: activeIndex === idx ? 1 : 0.6 }}
                className={`bg-gradient-to-br ${item.color === 'bg-blue-600' ? 'from-blue-50 to-blue-100' : 'from-gray-50 to-gray-100'} p-6 rounded-xl border ${item.color === 'bg-blue-600' ? 'border-blue-200' : 'border-gray-200'} overflow-hidden transition-all duration-300`}
              >
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className="font-bold text-lg text-gray-900">{item.title}</h4>
                    <p className="text-sm text-gray-600">{item.subtitle}</p>
                  </div>
                  <span className="text-sm text-gray-500">{item.date}</span>
                </div>
                <p className="text-sm text-gray-700 mb-2">{item.location}</p>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: activeIndex === idx ? 1 : 0 }}
                  className="text-sm text-gray-600 leading-relaxed"
                >
                  {item.description}
                </motion.p>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
