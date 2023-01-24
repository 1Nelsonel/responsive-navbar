import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import bgImage from "../../assets/blog/page-header.jpg";
import blog1 from "../../assets/blog/blog1.png";
import "./Blog.css";
import { ArrowLeft, ArrowRight, Calendar, Messenger } from "react-bootstrap-icons";

const Blog = () => {
  const bgBlog = {
    backgroundImage: `url(${bgImage})`,
    width: "100%",
    height: "300px",
    objectFit: "cover",
    objectPosition: "50% 50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    filter: "brightness(50%)",
  };
  return (
    <div className="pt-4 mt-5 pb-4">
      <div style={bgBlog} className="darken">
        <div className="bg-image text-center">
          <h4 className="fw-bolder text-light">
            <span className="h4-not-darken">
              My Blog <br></br>Profesional Blog Page
            </span>
          </h4>
        </div>
      </div>
      <Container className="p-4">
        <Row>
          <Col sm={3} className="blog-content-left">
            <div>
              <Form>
                <Form.Control
                  className=""
                  placeholder="search for a blog here.."
                />
              </Form>
            </div>
            <div className="pt-4 categories">
              <h4>CATEGORIES</h4>
              <ul>
                <li>All</li>
                <li>Data Science</li>
                <li>Web developement</li>
                <li>Software Engineering</li>
              </ul>
            </div>
          </Col>
          <Col sm={9} className="blog-content-right">
            <div>
              <div className="blog-image">
                <img src={blog1} alt="" />
              </div>
              <div className="comment-time">
                <p>
                  <Messenger color="gray" />
                  <span className="comment">Comments</span>
                </p>
                <p>
                  <Calendar color="gray" />
                  <span className="time">8 Months :Ago</span>
                </p>
              </div>
              <div className="blog-content">
                Data science and machine learning provides the basis for
                business growth, cost and risk reduction and even new business
                model creation. Implementing predictive analytics does present
                some challenges, however. The process can be complex, and it can
                be difcult to find data scientists and analysts with a mix of
                the right skillsets. A drag and drop, visual data science tool,
                exemplified by IBM SPSS Modeler, enables rapid creation of
                machine learning models while making it easy to collaborate with
                data science and analytics teams as a whole. In this paper,
                members of IT Central Station who use IBM SPSS Modeler share
                their experiences and ofer insights and recommended best
                practices for data science and machine learning
               </div>
               <div className="pt-4 blog-button"> 
                    <Button variant="outline-dark" className="btn">Read More</Button>
               </div>
               <div className="navigation">
                <table>
                    <td>
                        <ArrowLeft/>
                    </td>
                    <td>1</td>
                    <td>2</td>
                    <td>3</td>
                    <td>
                        <ArrowRight/>
                    </td>
                </table>
               </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Blog;
