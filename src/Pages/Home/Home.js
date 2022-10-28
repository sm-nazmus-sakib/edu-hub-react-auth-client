import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

const Home = () => {
    return (
        <div className='w-full p-1 mb-0'>
            <h2 className='fw-bold text-center'>EduHub </h2>
            <p className='text-center fw-semibold'>We offer Programming related Course</p>
            <Carousel className='mt-2 '>
                <Carousel.Item className=''>
                    <img style={{ height: "500px" }}
                        className="d-block w-100 rounded"
                        src="https://s3-us-east-2.amazonaws.com/maryville/wp-content/uploads/2020/12/03130857/MVU-MSDSCI-2020-Q2-Skyscraper_-X-Types-of-Programming-Languages-for-Data-Science-header-v1.jpg"
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img style={{ height: "500px" }}
                        className="d-block w-100 rounded"
                        src="https://i1.wp.com/courseora.com/wp-content/uploads/2020/05/Free_Programing_Courses.jpg?fit=2500%2C1400&ssl=1"
                        alt="Second slide"
                    />
                </Carousel.Item>

                <Carousel.Item>
                    <img style={{ height: "500px" }}
                        className="d-block w-100 rounded"
                        src="https://images.unsplash.com/photo-1534665482403-a909d0d97c67?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTc3M3wwfDF8c2VhcmNofDI2fHxjb2Rpbmd8ZW58MHx8fHwxNjI1NDEzODMy&ixlib=rb-1.2.1&q=80&w=2000"
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
            <footer className='text-center text-white p-1 bg-secondary rounded'>
                <small>All reserved right @Nazmus Sakib </small> 
            </footer>
        </div>
    );
};

export default Home;