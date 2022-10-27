import React from 'react';
import { Card, Container } from 'react-bootstrap';

const Blog = () => {
    return (
        <Container>
            <Card className='my-5'>
                <Card.Header as="h5">what is cors?</Card.Header>
                <Card.Body>
                    <Card.Text>
                    Cross-Origin Resource Sharing CORS is an HTTP-header based mechanism that allows a server to indicate any origins domain, scheme, or port other than its own from which a browser should permit loading resources. CORS also relies on a mechanism by which browsers make a "preflight" request to the server hosting the cross-origin resource, in order to check that the server will permit the actual request. In that preflight, the browser sends headers that indicate the HTTP method and headers that will be used in the actual request.
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className='my-5'>
                <Card.Header as="h5">Why are you using firebase? What other options do you have to implement authentication?</Card.Header>
                <Card.Body>
                    <Card.Text>
                        Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more. Firebase Authentication integrates tightly with other Firebase services, and it leverages industry standards like OAuth 2.0 and OpenID Connect, so it can be easily integrated with your custom backend. Firebase is a highy popular company and their authentication system is very powerful. That's why we use Firebase. Other authentication options are Microsoft Authenticator, Duo Security, LastPass, Authy, RSA SecurID® Access, OneLogin, Okta MFA for Fortinet VPN.
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className='my-5'>
                <Card.Header as="h5">How does the private route work?</Card.Header>
                <Card.Body>
                    <Card.Text>
                        Private Routes in React Router also called Protected Routes require a user being authorized to visit a route read: page. So if a user is not authorized for a specific page, they cannot access it. The most common example is authentication in a React application where a user can only access the protected pages when they are authorized which means in this case being authenticated. Authorization goes beyond authentication though. For example, a user can also have roles and permissions which give a user access to specific areas of the application.
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className='my-5'>
                <Card.Header as="h5">What is Node? How does Node work?</Card.Header>
                <Card.Body>
                    <Card.Text>
                        Node.js is an open-source backend javascript runtime environment. It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node.js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.Node.js accepts the request from the clients and sends the response, while working with the request node.js handles them with a single thread. To operate I/O operations or requests node.js use the concept of threads. Thread is a sequence of instructions that the server needs to perform. It runs parallel on the server to provide the information to multiple clients. Node.js is an event loop single-threaded language. It can handle concurrent requests with a single thread without blocking it for one request.Node.js basically works on two concept Asynchronous, Non-blocking I/O.
                    </Card.Text>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default Blog;