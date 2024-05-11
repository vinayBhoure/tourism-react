import React from 'react';
import { Container, Row, Col, Button, Image } from 'react-bootstrap';
import { FaShare, FaBookmark } from 'react-icons/fa'; // For share and save buttons
import { BsCircleFill } from 'react-icons/bs'; // For other icons
import { FiShare2, FiSave } from 'react-icons/fi'; // Example of sharing and saving icons

const BookHotel = ({}) => (
  <Container fluid className="bg-white">
    <Row className="justify-between align-items-start px-4 py-3">
      <Col>
        <h1 className="text-4xl font-semibold">Train at the X-Mansion</h1>
      </Col>
      <Col className="d-flex justify-end">
        <div className="d-flex space-x-4">
          <Button className="h-10 px-4 py-2">
            <FiShare2 /> Share
          </Button>
          <Button className="h-10 px-4 py-2">
            <FiSave /> Save
          </Button>
        </div>
      </Col>
    </Row>

    <Row className="g-4 px-4 py-3">
      <Col md={8} className="d-grid grid-template-columns-2 gap-4">
        <Image
          src="/placeholder.svg"
          alt="Main room"
          className="rounded-lg"
          style={{ width: '100%', aspectRatio: '400/300', objectFit: 'cover' }}
        />
        <Row className="g-4">
          <Col md={6}>
            <Image
              src="/placeholder.svg"
              alt="Room detail"
              className="rounded-lg"
              style={{ width: '100%', aspectRatio: '200/150', objectFit: 'cover' }}
            />
          </Col>
          <Col md={6}>
            <Image
              src="/placeholder.svg"
              alt="Bedroom"
              className="rounded-lg"
              style={{ width: '100%', aspectRatio: '200/150', objectFit: 'cover' }}
            />
          </Col>
          <Col md={6}>
            <Image
              src="/placeholder.svg"
              alt="Hallway"
              className="rounded-lg"
              style={{ width: '100%', aspectRatio: '200/150', objectFit: 'cover' }}
            />
          </Col>
          <Col md={6}>
            <Image
              src="/placeholder.svg"
              alt="Exterior"
              className="rounded-lg"
              style={{ width: '100%', aspectRatio: '200/150', objectFit: 'cover' }}
            />
          </Col>
        </Row>
        <Button className="h-10 px-4 py-2 mt-4 bg-primary">
          Show all photos
        </Button>
      </Col>

      <Col md={4}>
        <div className="space-y-4">
          <div>
            <p className="font-semibold">New Castle, New York, United States</p>
            <p className="text-sm text-gray-500">Single-day experience</p>
          </div>

          <div className="d-flex align-items-center space-x-2">
            <span className="relative flex h-10 w-10 overflow-hidden rounded-full bg-muted">J</span>
            <div>
              <p className="font-semibold">Hosted by Jubilee</p>
              <p className="text-sm text-gray-500">Superhost, obviously</p>
            </div>
          </div>

          <div className="space-y-2">
            <div className="d-flex align-items-center space-x-2">
              <BsCircleFill className="h-6 w-6 text-gray-600" />
              <span>Hang out in our radical 2D world</span>
            </div>
            <div className="d-flex align-items-center space-x-2">
              <BsCircleFill className="h-6 w-6 text-gray-600" />
              <span>Train in the Danger Room</span>
            </div>
            <div className="d-flex align-items-center space-x-2">
              <BsCircleFill className="h-6 w-6 text-gray-600" />
              <span>Try Cerebro on for size</span>
            </div>
            <div className="d-flex align-items-center space-x-2">
              <BsCircleFill className="h-6 w-6 text-gray-600" />
              <span>Explore a beast of a lab</span>
            </div>
          </div>

          <div className="d-flex justify-between align-items-center border-top pt-3">
            <div className="text-xl font-semibold">
              <span>₹3,181</span>
              <span className="text-sm text-gray-500"> per guest</span>
            </div>
            <Button
              className="inline-flex items-center justify-center text-primary-foreground bg-[#bd1e59] h-10 px-4 py-2"
            >
              Request
            </Button>
          </div>
        </div>
      </Col>
    </Row>
  </Container>
);

export default BookHotel;
