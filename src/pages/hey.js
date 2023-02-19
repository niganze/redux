const {register,handleSubmit,reset}=useForm();

  const { blogId } = useParams();
  const onSubmit = async (data) => {
    //  data=new data();
    // data.append("comment", data.comment);
    try {
      await axios.post(
        `https://blogapi-uvr7.onrender.com/api/v1/comment/addcomment/${blogId}`, data,
        {
          headers: {
            "content-Type": "multipart/form-data",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      alert('comment posted');
      reset();
    }
    catch (error) {
      console.log(error.response);
    }
  }