import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import getListProjects from '../actions/projectActions';
import { Card, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ProjectList = () => {

    const dispatch = useDispatch();

    const projectList = useSelector(state => state.projectLists)
    const { success, loading, projects } = projectList;

    useEffect(() => {
        dispatch(getListProjects())
    }, [dispatch])

    return (
        <div>
            <h1>Project List</h1>
            <hr />
            <Container>
                <Row>
                    {projects.map((project) => (
                        <Col xs={12} md={6} lg={4} key={project.id}>
                            <Card style={{ width: '18rem' }} className='m-3 pd-2'>
                                <Card.Img variant="top" height='150px' src={project.thumbnail} />
                                <Card.Body>
                                    <Card.Title>{project.title}</Card.Title>
                                    <Card.Text onClick={() => dispatch(filtered(project.category))}><b>({project.category})</b></Card.Text>
                                    <hr />
                                    <a className='btn btn-info m-2 pd-2' href={project.demo} target='_blank'>Demo</a>
                                    <Link style={{ textDecoration: 'none', marginLeft: '2px', marginRight: '2px' }} className='m-2 pd-2 btn btn-success' to={'/project-detail/' + project.id}>View</Link>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
}

export default ProjectList;
