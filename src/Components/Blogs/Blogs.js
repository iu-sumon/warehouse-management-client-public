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
                            It is very lightweight and fast. There has been over 200000 visits on this website in three weeks and minimal server resources has been able to handle it all.
                            The counter is really easy to make to be real time.
                            Node.js was easy to configure.If server side code requires very few cpu cycles. In other world you are doing non blocking operation and does not have heavy algorithm/Job which consumes lots of CPU cycles.


                            <p className='fw-bolder'>When should you use mongodb?</p>
                            MongoDB facilitate to store database in json(javascript object notation) (or simply when data in form of key value pair) this is very fast and efficient so you should use it when you have key value pair to store(json data)
                            one of the best advantage with MongoDB is you can store a collection inside another collection (in relational database is can be said as table inside another table) this neglect use of “join”
                        </Accordion.Body>


                    </Accordion.Item>

                    <Accordion.Item eventKey="2">
                        <Accordion.Header><p className='fw-bolder'>Differences between sql and nosql databases.</p> </Accordion.Header>
                        <Accordion.Body>
                            <div className='table-responsive'>
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">No</th>
                                            <th scope="col">SQL</th>
                                            <th scope="col">NoSQL</th>

                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>Relational database management system(RDBMS)</td>
                                            <td>Non-relational or distributed database system.</td>

                                        </tr>
                                        <tr>
                                            <th scope="row">2</th>
                                            <td>These databases have fixed or static or predefined schema</td>
                                            <td>They have dynamic schema</td>


                                        </tr>


                                        <tr>
                                            <th scope="row">3</th>
                                            <td>These databases are not suited for hierarchical data storage.</td>
                                            <td>These databases are best suited for hierarchical data storage.</td>


                                        </tr>
                                        <tr>
                                            <th scope="row">4</th>
                                            <td>These databases are best suited for complex queries</td>
                                            <td>These databases are not so good for complex queries</td>



                                        </tr>
                                        <tr>
                                            <th scope="row">5</th>
                                            <td>Vertically Scalable</td>
                                            <td>Horizontally scalable</td>

                                        </tr>
                                        <tr>
                                            <th scope="row">6</th>
                                            <td>Follows ACID property</td>
                                            <td>Follows CAP(consistency, availability, partition tolerance)</td>

                                        </tr>


                                    </tbody>
                                </table>
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                        <Accordion.Header><p className='fw-bolder'>What is the purpose of jwt? and How does it work?</p> </Accordion.Header>
                        <Accordion.Body>
                            <p className='fw-bolder'>What is the purpose of jwt?</p>
                            JWT also allows us to use the same JSON Web Token in multiple servers that you can run without running into problems where one server has a certain session, and the other server doesn't. Most modern web applications use JWT for authentication reasons like scalability and mobile device authentication.

                            <p className='fw-bolder'>How does it work?</p>
                            JWTs differ from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. What these claims are depends on the use case at hand. For example, a claim may assert who issued the token, how long it is valid for, or what permissions the client has been granted.

                            A JWT is a string made up of three parts, separated by dots (.), and serialized using base64. In the most common serialization format, compact serialization, the JWT looks something like this: xxxxx.yyyyy.zzzzz.Once decoded, you will get two JSON strings:
                            <p>1.The header and the payload.</p>
                            <p>2.The signature.</p>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        </div>
    );
};

export default Blogs;