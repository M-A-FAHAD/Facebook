import '../../../public/AlCSS/middle.css'
import Create_post from './create-post'
import Post from './post'
import Storys from './storys'
export default function Middle() {
    return (
        <>
            <div className="middle-main-div">
                <Storys />
                <Create_post />
                <Post />
            </div>

        </>
    )
}