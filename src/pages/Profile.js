import axios from "axios";
import { useEffect, useState  } from "react";
import 'antd/dist/antd.css'; 

const Profile = () => {
  const [posts, setPosts] = useState();
  // const [isloading, setIsLoading] = useState(true);
  useEffect(() => {
    axios
      .get(`https://60dff0ba6b689e001788c858.mockapi.io/token`)
      .then((response) => {
        // handle success
        console.log(response);
        setPosts(response.data);
        // setIsLoading(false);
      })
      .catch((error) => {
        // handle error
        console.log(error);
      });
  }, []);
    return posts;
};
export default Profile;
