import React from 'react';

const Resume = () => {
    return (
        <div className="resume">
            <header>
                <h1>Your Name</h1>
                <p>Your Tagline or Summary</p>
            </header>
            <section className="contact">
                <h2>Contact Information</h2>
                <p>Email: your.email@example.com</p>
                <p>Phone: (123) 456-7890</p>
                <p>LinkedIn: your-linkedin-profile</p>
            </section>
            <section className="education">
                <h2>Education</h2>
                <ul>
                    <li>
                        <strong>Degree</strong>, Major - University Name (Year)
                    </li>
                    <li>
                        <strong>Degree</strong>, Major - University Name (Year)
                    </li>
                </ul>
            </section>
            <section className="experience">
                <h2>Experience</h2>
                <ul>
                    <li>
                        <strong>Job Title</strong> - Company Name (Year - Year)
                        <p>Responsibilities and achievements...</p>
                    </li>
                    <li>
                        <strong>Job Title</strong> - Company Name (Year - Year)
                        <p>Responsibilities and achievements...</p>
                    </li>
                </ul>
            </section>
            <section className="skills">
                <h2>Skills</h2>
                <ul>
                    <li>Skill 1</li>
                    <li>Skill 2</li>
                    <li>Skill 3</li>
                </ul>
            </section>
        </div>
    );
};

export default Resume;