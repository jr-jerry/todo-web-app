function ProfileSection() {
    return (
        <div className="profile-section h-full ">
            <div className="image-up-behind-div h-[10%] relative ">
                <img src="https://img.freepik.com/premium-photo/happy-man-ai-generated-portrait-user-profile_1119669-1.jpg?w=2000" alt="profile-image" className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 rounded-full h-24 w-24 z-3" />
                

            </div>
            <div className="image-below-div h-[90%] bg-gray-100  py-8 px-8 relative ">
            <h3 className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-16 ">John Doe</h3>
            <div className="profile-section bg-white h-[40%] mb-4">

            </div>
            <div className="add-list-section bg-white h-[10%] mb-4">
            </div>
            <div className="h-[45%] bg-white">

            </div>
            </div>
        </div>
    )
}
export default ProfileSection;