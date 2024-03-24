import SideBar from '../../components/sidebar/SideBar';
import MessageContainer from '../../components/messages/MessageContainer';
import { Toaster } from 'react-hot-toast';

const Home = () => {
  return (
    <div className="flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
      <SideBar/>
      <MessageContainer/>
      <Toaster/>
    </div>
  );
}

export default Home