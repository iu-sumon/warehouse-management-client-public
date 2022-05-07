import React from 'react';
import blog1 from '../../images/blogs/1_300x300.jpg'
import blog2 from '../../images/blogs/2_300x300.jpg'
import blog3 from '../../images/blogs/3_300x300.jpg'
import blog4 from '../../images/blogs/4_300x300.jpg'
// import blog5 from '../../images/blogs/5_300x300.jpg'
// import blog6 from '../../images/blogs/6_300x300.jpg'

const WareHouseBlogs = () => {
    return (
        <div className='container'>
            <h1>Our Blogs</h1>
            <div className='row row-cols-1 row-cols-md-4 g-4 py-5'>
                <div class="col">
                    <div class="card h-100 shadow-sm">
                        <img src={blog1} class="card-img-top" alt="Skyscrapers" />
                        <div class="card-body">
                            <h5 class="card-title">How Smart Devices Make Our Lives Comfortable?</h5>
                            <p class="card-text">
                                Let's Admit It: In today's busy lifestyle, most of our essential tasks are left untouched. Also, being a human, it…
                            </p>
                        </div>
                        <div class="card-footer">
                            <small class="text-muted">Last updated 15 mins ago</small>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100 shadow-sm">
                        <img src={blog2} class="card-img-top" alt="Skyscrapers" />
                        <div class="card-body">
                            <h5 class="card-title">Role Of Smartphones In Business During COVID-19 Pandemic</h5>
                            <p class="card-text">
                                Smartphones and other smart devices are considered the fastest-growing device in today's world. Especially during the COVID-19 pandemic, when most…
                            </p>
                        </div>
                        <div class="card-footer">
                            <small class="text-muted">Last updated 1 hour ago</small>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100 shadow-sm">
                        <img src={blog3} class="card-img-top" alt="Skyscrapers" />
                        <div class="card-body">
                            <h5 class="card-title">Role Of Smart Device To Combat COVID-19 Pandemic</h5>
                            <p class="card-text">
                                During the corona virus pandemic, smart devices are essential to keep our cities functions and communicate with the urban areas...
                            </p>
                        </div>
                        <div class="card-footer">
                            <small class="text-muted">Last updated 2 hours ago</small>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100 shadow-sm">
                        <img src={blog4} class="card-img-top" alt="Skyscrapers" />
                        <div class="card-body">
                            <h5 class="card-title">7 Portable Smart Device That Improves Your Health Quality</h5>
                            <p class="card-text">
                                Do you want to maintain a healthy lifestyle in today's busy world? Then, continue reading this health and fitness blog…
                            </p>
                        </div>
                        <div class="card-footer">
                            <small class="text-muted">Last updated 45 mins ago</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WareHouseBlogs;