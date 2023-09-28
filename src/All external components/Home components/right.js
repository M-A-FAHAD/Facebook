import '../../../public/AlCSS/right.css'
export default function Right() {
    return (
        <>
            <div className="right-main-div">
                <div className='group-cnv-div'>
                    <span className='group-cnv'>Group conversation</span>
                </div>
                <div className='create-new-group-div'>
                    <span className='create-new-group-img'><img className='new-group-icon' src='/icons/plus.png' /></span>
                    <span className='create-new-group'>Create New Group</span>
                </div>
            </div>
        </>
    )
}