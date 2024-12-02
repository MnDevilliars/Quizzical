import React from 'react'

function About() {
    return (
        <div className="about-page min-h-screen p-8">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold mb-6 text-center text-white">About Us</h1>
                <p className="text-lg mb-4 text-center text-white">
                    Welcome to <strong>Quizzical</strong>, the ultimate platform for
                    enhancing knowledge and having fun while learning! Our mission is to
                    make learning interactive, engaging, and accessible for everyone.
                    Whether you're a student, a professional, or just someone looking to
                    sharpen your skills, our quizzes are designed to challenge your mind
                    and expand your horizons.
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4 text-white">Why Choose Us?</h2>
                <ul className="list-disc list-inside space-y-2 text-white">
                    <li>💡 <strong>Variety of Topics:</strong> Explore quizzes in a wide range of subjects, including General Knowledge, Science, Technology, Mathematics, History, and more.</li>
                    <li>🎮 <strong>Interactive Experience:</strong> With a user-friendly interface and dynamic questions, learning becomes an enjoyable journey.</li>
                    <li>📊 <strong>Track Your Progress:</strong> Keep a record of your scores and monitor your improvement over time.</li>
                    <li>🏆 <strong>Competitive Edge:</strong> Participate in leaderboards and compete with other users to showcase your knowledge.</li>
                </ul>

                <h2 className="text-2xl font-bold mt-8 mb-4 text-white">Features</h2>
                <ul className="list-disc list-inside space-y-2 text-white">
                    <li>🔧 <strong>Customizable Quizzes:</strong> Tailor quizzes to your preferred difficulty level and topics of interest.</li>
                    <li>✅ <strong>Instant Feedback:</strong> Get detailed explanations for each question to learn and improve.</li>
                    <li>📱 <strong>Accessible Anywhere:</strong> Play quizzes on your favorite device, anytime, anywhere.</li>
                    <li>🔒 <strong>Safe and Secure:</strong> Your data privacy is our priority.</li>
                </ul>

                <h2 className="text-2xl font-bold mt-8 mb-4 text-white">Our Vision</h2>
                <p className="text-lg text-white">
                    We believe that learning should be a continuous and enjoyable process.
                    With <strong>Quizzical</strong>, we aim to transform the way people
                    learn by blending education with gamification.
                </p>

                <p className="text-lg mt-4 text-center text-white">
                    Join us on this exciting journey of learning and self-improvement. Let’s
                    make every question count!
                </p>
            </div>
        </div>
    )
};

export default About;