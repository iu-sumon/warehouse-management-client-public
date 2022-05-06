import React from 'react';
import { Accordion } from 'react-bootstrap';

const Blogs = () => {
    return (
        <div className="gradient-custom ">
            <div className='w-75 mx-auto py-5' style={{ backgroundColor: '' }} >
                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header><p className='fw-bolder'>Difference between javascript and nodejs.</p> </Accordion.Header>
                        <Accordion.Body>
                            <div className='table-responsive'>
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">No</th>
                                            <th scope="col">Javascript </th>
                                            <th scope="col">Node.js</th>

                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>JavaScript is a scripting or programming language that allows you to implement complex features on web pages</td>
                                            <td>Node.js is a platform built on Chrome's JavaScript runtime for easily building fast and scalable network applications.</td>

                                        </tr>
                                        <tr>
                                            <th scope="row">2</th>
                                            <td>It is an open-source, cross-platform, interpreted, lightweight scripting programming language that is used to develop dynamic and web applications.</td>
                                            <td>It is a cross-platform, open-source JavaScript runtime environment that allows JavaScript to be run on the server.</td>


                                        </tr>

                                     
                                        <tr>
                                            <th scope="row">3</th>
                                            <td>It is a programming language. It works in any browser that has a proper browser engine.</td>
                                            <td>It's a JavaScript interpreter and environment with some valuable libraries that JavaScript programming can use separately.</td>


                                        </tr>
                                        <tr>
                                            <th scope="row">4</th>
                                            <td>JavaScript can be run on any engine, including Spider Monkey, V8, and JavaScript Core.</td>
                                            <td>Node JS is only supported by the V8 engine, which Google Chrome mostly uses.</td>
                                         


                                        </tr>
                                        <tr>
                                            <th scope="row">5</th>
                                            <td>It is designed to build network-centric applications.</td>
                                            <td>It's designed for data-intensive real-time applications that run on several platforms.</td>

                                        </tr>
                                        <tr>
                                            <th scope="row">6</th>
                                            <td>It is generally used on the client-side server.</td>
                                            <td>It is generally used on the server-side.</td>

                                        </tr>
                                        

                                    </tbody>
                                </table>
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">

                        <Accordion.Header><p className='fw-bolder'>When should you use nodejs? and When should you use mongodb?</p></Accordion.Header>
                        <Accordion.Body>
                            <p className='fw-bolder'>When should you use nodejs?</p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos amet officia sint iste qui, possimus eligendi unde architecto voluptatum non quisquam optio odit! Quae praesentium tempora, doloremque odio nihil ut!

                            <p className='fw-bolder'>When should you use mongodb?</p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus ex non neque ab animi magni soluta cumque, eos atque, optio ipsa illo aliquam perferendis. Non laborum aut doloremque temporibus magni!
                        </Accordion.Body>


                    </Accordion.Item>

                    <Accordion.Item eventKey="2">
                        <Accordion.Header><p className='fw-bolder'>Differences between sql and nosql databases.</p> </Accordion.Header>
                        <Accordion.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                            est laborum.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                        <Accordion.Header><p className='fw-bolder'>What is the purpose of jwt? and How does it work?</p> </Accordion.Header>
                        <Accordion.Body>
                            <p className='fw-bolder'>What is the purpose of jwt?</p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos amet officia sint iste qui, possimus eligendi unde architecto voluptatum non quisquam optio odit! Quae praesentium tempora, doloremque odio nihil ut!

                            <p className='fw-bolder'>How does it work?</p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus ex non neque ab animi magni soluta cumque, eos atque, optio ipsa illo aliquam perferendis. Non laborum aut doloremque temporibus magni!
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        </div>
    );
};

export default Blogs;