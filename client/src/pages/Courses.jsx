import programming from "../assets/imgs/download (1).jpeg"
import mma from "../assets/imgs/download.jpeg"
import gameDev from "../assets/imgs/download (2).jpeg"
import robotics from "../assets/imgs/download (3).jpeg"
import maths from "../assets/imgs/download (4).jpeg"

export default function Courses() {
    const courses = [
        { title: "Programming", img: programming },
        { title: "MMA (Martial Arts)", img: mma },
        { title: "Game Development", img: gameDev },
        { title: "Robotics", img: robotics },
        { title: "Maths", img: maths },
    ];

    return (
        <div className="min-h-screen bg-green-50 p-6 md:p-12">
            <header className="text-center mb-12">
                <h1 className="text-4xl md:text-6xl font-black text-green-900 uppercase tracking-tight">
                    Our Courses
                </h1>
                <div className="h-2 w-24 bg-green-500 mx-auto mt-4 rounded-full"></div>
            </header>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                {courses.map((course, index) => (
                    <div 
                        key={index} 
                        className="group bg-white border border-green-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
                    >
                        <div className="relative overflow-hidden">
                            <img 
                                src={course.img} 
                                alt={course.title} 
                                className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-green-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>
                        
                        <div className="p-6 flex justify-between items-center">
                            <h2 className="text-2xl font-bold text-green-900 group-hover:text-green-600 transition-colors">
                                {course.title}
                            </h2>
                            <button className="bg-green-100 p-2 rounded-full text-green-700 hover:bg-green-600 hover:text-white transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                                </svg>
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}