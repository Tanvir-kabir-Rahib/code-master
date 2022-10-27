import React from 'react';
import { Accordion } from 'react-bootstrap';

const FAQ = () => {
    return (
        <div className='heighter container'>
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>What is the best programming language to start with?</Accordion.Header>
                    <Accordion.Body>
                        Python is always recommended if you're looking for an easy and even fun programming language to learn first. Rather than having to jump into strict syntax rules, Python reads like English and is simple to understand for someone who's new to programming.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Best programming languages in 2022</Accordion.Header>
                    <Accordion.Body>
                        The best programming languages in 2022 are Python. Python can be regarded as the future of programming languages, Java. Java is one of the most powerful programming languages that is currently used in more than 3 billion devices, JavaScript. JavaScript is one of the world's most popular programming languages on the web, Kotlin, R, PHP, Go, C.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>Is programmer the same as coding?</Accordion.Header>
                    <Accordion.Body>
                        Coding is an essential part of programming, but a programmer requires a lot more knowledge, experience, and additional skills than coding. A programmer creates complex programs, read, and executed by the machine providing a complete set of instructions for computers to perform.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header>What is competitive programming?</Accordion.Header>
                    <Accordion.Body>
                        Competitive programming is a mind sport usually held over the Internet or a local network, involving participants trying to program according to provided specifications. Contestants are referred to as sport programmers. Competitive programming is recognized and supported by several multinational software and Internet companies, such as Google[1][2] and Facebook.[3] A programming competition generally involves the host presenting a set of logical or mathematical problems, also known as puzzles, to the contestants (who can vary in number from tens or even hundreds to several thousands), and contestants are required to write computer programs capable of solving each problem. Judging is based mostly upon number of problems solved and time spent for writing successful solutions, but may also include other factors (quality of output produced, execution time, memory usage, program size, etc.)
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>


        </div >
    );
};

export default FAQ;