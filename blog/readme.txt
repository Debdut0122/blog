1. creates a new project => npx create-react-app project name
2. run the project => npm run start
3. npm install

4. fucntion names initials should be in capital

5. babel converts jsx to html and js

6. const [age,setAge] = useState(30);

    here age variable stores the variables 30 and setAge helps to set the values that we need to change

7. Props are used to pass data from parent component to child component

    => Let's say I want to pass on some variables from home component to BlogList component
    => while calling <BlogList/> in Home.js, call like this <BlogList blogs={blogs}/>
    => and in BlogList, define BlogList as
        const BlogList = (props)=>{
            blogs = props.blogs
        }
        OR
        const BlogList = ({blogs})=>{
            blogs = props.blogs
        }

8. useEffect hook, run on every renders or whenever some data changes
    useEffect(fucntion, dependency array)
    for example;
    useEffect(()=>{
        console.log("ran");
    })
    useEffect(()=>{
        console.log("ran");
    },[name])
    The dependency array avoids rendering always but renders only when name changes

9. to run a jason server on a data that lies in data folder

    npx json-server --watch data/db.json --port 8000

/blogs  GET Fetch All blogs
/blogs/{id} GET Fetch a single blogs
/blogs  POST add a new blogs
/blogs/{id} Delete Delete a blogs
