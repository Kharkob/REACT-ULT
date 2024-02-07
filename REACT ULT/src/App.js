//installing the Boiler was an issue well it was more doing the NPM INSTALL part that idk seems to be messing up with 6 high errors and 2 critical
import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Button, ButtonGroup } from 'react-bootstrap/Button' ;
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Alert from 'react-bootstrap/Alert';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import {
  BrowserRouter as Router, 
  Switch,
  Route,
  Like,
  useRouteMatch
} from 'react-router-dom';

export default function App() {
  const posts = [
    {
      id: 3,
      title: 'My First Post' ,
      date: '4-7-2020' , 
      content: 'This is my first post'
    },
    {
     id:  3,
     title: 'Checking In' ,
     date: '4-8-2020' ,
     content: 'Yesterday was a good day, looking forward to another!'
    },
    {
     Id: 3,
     title: 'Vacation Time',
     date: '4-9-2020' ,
    content: 'Finally time to head to Gotham for our trip!'
    }
];

   return (
      <Container>
      <Router>
          <div>
              <ButtonGroup>
                  <Button variant="outline-secondary">
                     <Link to ="/">Home</Link>
                  </Button>
                  <Button variant="outline-secondary">
                     <Link to ="/friends">Friends</Link>
                  </Button>
                  <Button variant="outline-secondary">
                     <Link to = "/posts">Posts</Link>
                  </Button>
              </ButtonGroup>
              <Switch>
                  <Route path='/posts'>
                      <Posts posts={posts} />
                  </Route>
                  <Route path="/friends">
                      <Friends name={['Vert Wheeler', 'Taro Kitana',  'Kurt Wylde']} />
                  </Route>
                  <Route path="/">
                      <Home />
                  </Route>
              </Switch>
          </div>
      </Router>
      </Container>
    ) ;
}

function Home() {
    return <h2>Home</h2>
}

function Friends() {
  const { names } = props;
  
  return (
     <div>
        <ul>
            {names.map((friend, index) => (
                <li key={index}>{friend}</li>
            ))}
        </ul>
     </div>

  );
}

function Posts({ posts}) {
  const match = useRouteMatch();
  const findPostById = (id) => 
    posts.filter((post) => post.Id == id)[0];

  return (
    <div>
        <h2>Posts</h2>
        
            {posts.map((post, index) => {
              return (
                <Alert key={index} variant="primary">
                  <Link to={`${match.url}/${post.id}`}>
                    {post.title}
                  </Link>
                </Alert>
              );
            })}
        
        <Switch>
           <Route 
          path={`${match.path}/:postId`}
          render={(props) => (
              <Post
                  {...props}
                  data={findPostById(props.match.params.postId)}
                />
              )}
          />

        </Switch>
    </div>
  )
}

function Post(props) {
  const { data } = props; 
  return  data ==  undefined ? <h1>Element 115 NOT FOUND</h1> : (
    <Card>
        <Card.Header>{data.title}</Card.Header>
        <Card.Body>
            <Card.Subtitle>{data.date}</Card.Subtitle>
            <Card.Text>{data.content}</Card.Text>
        </Card.Body>
     </Card>
  );
}
//react bootstrap install got alot of errors
