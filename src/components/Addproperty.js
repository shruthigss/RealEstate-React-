import React, { useState, useEffect } from "react";
import M from "materialize-css";
import { useHistory } from "react-router-dom";

export default function CreatePost() {
  const history = useHistory();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [image, setImage] = useState("");
  const [url, setUrl] = useState("");

  useEffect(() => {
    if (url) {
      fetch("/add property", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("jwt"),
        },
        body: JSON.stringify({
          title,
          body,
          pic: url,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.error) {
            M.toast({ html: data.error, classes: "#c62828 red darken-3" });
          } else {
            M.toast({
              html: "Created post  Successfully",
              classes: "#689f38 light-green darken-2",
            });
            history.push("/");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [url]);

  const postDetails = () => {
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "instaclone");
    data.append("cloud_name", "dspbghnww");
    fetch("https://api.cloudinary.com/v1_1/dspbghnww/image/upload", {
      method: "post",
      body: data,
    })
      .then((res) => res.json())
      .then((data) => {
        setUrl(data.url);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>

    <button style={{marginTop:"20px",marginLeft:"1250px"}}
    className="btn waves-effect waves-light red"
    onClick={()=>{
      localStorage.clear()
    
      history.push('/')
    }} >
    
    Logout
  </button>

    <div
      className="card input-filed"
      style={{
        margin: "30px auto",
        maxWidth: "500px",
        padding: "20px",
        textAlign: "center",
        display: "block",
      }}
    >

        <div className='div-input'>
        <span className="span-input">
        <p>Property Type</p>
        <input
          type="text"
          placeholder="Property Type"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        /></span>
        <span><p>Negotable</p>
        <input
          type="text"
          placeholder="Negotable"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
        </span>
      </div>
      <div className='div-input'>
        <span className="span-input"><input
          type="Number"
          placeholder="Price"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        /></span>
        <span>
        <input
          type="text"
          placeholder="Ownership"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
        </span>
      </div>
      <div className='div-input'>
        <span className="span-input"><input
          type="text"
          placeholder="Property Age"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        /></span>
        <span>
        <input
          type="text"
          placeholder="Property Approved"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
        </span>
      </div>
      <div className='div-input'>
        <span className="span-input"><input
          type="text"
          placeholder="Property Description"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        /></span>
        <span>
        <input
          type="text"
          placeholder="Bank Loan"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
        </span>
      </div>
      <div className='div-input'>
        <span className="span-input"><input
          type="text"
          placeholder="Length"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        /></span>
        <span>
        <input
          type="text"
          placeholder="Breadth"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
        </span>
      </div>
      <div className='div-input'>
        <span className="span-input"><input
          type="text"
          placeholder="Total Area"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        /></span>
        <span>
        <input
          type="text"
          placeholder="Area Unit"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
        </span>
      </div>
      <div className='div-input'>
        <span className="span-input"><input
          type="text"
          placeholder="No oF BHK"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        /></span>
        <span>
        <input
          type="text"
          placeholder="No of Floor"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
        </span>
      </div>
      <div className='div-input'>
        <span className="span-input"><input
          type="text"
          placeholder="Attached"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        /></span>
        <span>
        <input
          type="text"
          placeholder="Western Toilet"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
        </span>
      </div>
      <div className='div-input'>
        <span className="span-input"><input
          type="text"
          placeholder="Furnished"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        /></span>
        <span>
        <input
          type="text"
          placeholder="Car Parking"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
        </span>
      </div>
      <div className='div-input'>
        <span className="span-input"><input
          type="text"
          placeholder="Lift"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        /></span>
        <span>
        <input
          type="text"
          placeholder="Electricity"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
        </span>
      </div>
      <div className='div-input'>
        <span className="span-input"><input
          type="text"
          placeholder="Facing"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        /></span>
        <span>
        <input
          type="text"
          placeholder="Name"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
        </span>
      </div>
      <div className='div-input'>
        <span className="span-input"><input
          type="text"
          placeholder="Mobile"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        /></span>
        <span>
        <input
          type="text"
          placeholder="Posted by"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
        </span>
      </div>
      <div className='div-input'>
        <span className="span-input"><input
          type="text"
          placeholder="Sale Type"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        /></span>
        <span>
        <input
          type="text"
          placeholder="Featured Package"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
        </span>
      </div>
      <div className='div-input'>
        <span className="span-input"><input
          type="text"
          placeholder="PPD Package"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        /></span>
        <span>
        <input
          type="text"
          placeholder="Email"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
        </span>
      </div>
      <div className='div-input'>
        <span className="span-input"><input
          type="text"
          placeholder="City"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        /></span>
        <span>
        <input
          type="text"
          placeholder="Area"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
        </span>
      </div>
      <div className='div-input'>
        <span className="span-input"><input
          type="text"
          placeholder="Pincode"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        /></span>
        <span>
        <input
          type="text"
          placeholder="Address"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
        </span>
      </div>
      <div className='div-input'>
        <span className="span-input"><input
          type="text"
          placeholder="Landmark"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        /></span>
        <span>
        <input
          type="text"
          placeholder="Latitude"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
        </span>
      </div>
      <div className='div-input'>
        <span className="span-input"><input
          type="text"
          placeholder="Longitude"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        /></span>
        <span>
        <input
          type="text"
          placeholder="body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
        </span>
      </div>
      
      <div class="file-field input-field">
        <div class="btn">
          <span>Upload Image</span>
          <input type="file" onChange={(e) => setImage(e.target.files[0])} />
        </div>
        <div class="file-path-wrapper">
          <input class="file-path validate" type="text" />
        </div>
      </div>
      <button
        className="btn waves-effect waves-light #64b5f6 blue darken-1"
        onClick={postDetails}
      >
        Submit Post
      </button>
    </div>
    </div>
  );
}
