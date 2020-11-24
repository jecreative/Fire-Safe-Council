import React, { useState } from 'react'
import styled from 'styled-components'
//* Redux
import { useDispatch, useSelector } from 'react-redux'
import { createPost, fetchAllPosts } from '../../../redux/actions/postActions'
import { uploadProductImages } from '../../../redux/actions/uploadActions'
//* Components
import { Button } from '../Button/Button'
import Spinner from '../Spinner/Spinner'

const AddPostModal = ({ setShowModal }) => {
  // eslint-disable-next-line
  const [uploading, setUploading] = useState()
  const [fileName, setFileName] = useState('Choose File')
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [body, setBody] = useState('')
  const dispatch = useDispatch()

  const {
    loading: uploadImageLoading,
    payload: uploadImagePayload,
  } = useSelector((state) => state.uploadImage)

  const { success, loading } = useSelector((state) => state.createPost)

  const handleHideModal = () => {
    setShowModal(false)
    document.body.style.overflow = 'auto'
  }

  const uploadFileHandler = async (e) => {
    e.preventDefault()
    const fileList = e.target.files

    //* Label for input
    setFileName(
      fileList.length === 1 ? fileList[0].name : fileList.length + ' images'
    )

    //* Init formData instance
    const formData = new FormData()

    //* Convert fileList into Array
    Array.from(fileList).forEach((file) => {
      formData.append('image', file)
    })

    setUploading(true)
    dispatch(uploadProductImages(formData))
    setUploading(false)
  }

  const handleCreateSubmit = async (e) => {
    e.preventDefault()
    await dispatch(
      createPost({
        title: title,
        description: description,
        body: body,
        images: uploadImagePayload.message.split(','),
      })
    )
    if (success) {
      setShowModal(false)
      document.body.style.overflow = 'auto'
      dispatch(fetchAllPosts())
    }
    //* Set error message with state
  }

  return (
    <Overlay>
      <PostsModal>
        {loading ? (
          <Spinner />
        ) : (
          <>
            <CloseModalBtn onClick={handleHideModal}>X</CloseModalBtn>
            <h3>Create a New Post</h3>
            <form name='Add New Post' onSubmit={handleCreateSubmit}>
              <div className='form-group'>
                <input
                  type='text'
                  name='title'
                  placeholder='Title'
                  onChange={(e) => setTitle(e.target.value)}
                  required
                  aria-required
                />
              </div>
              <div className='form-group'>
                <textarea
                  type='text'
                  name='description'
                  placeholder='Description'
                  onChange={(e) => setDescription(e.target.value)}
                  required
                  aria-required
                ></textarea>
              </div>
              <div className='form-group'>
                <textarea
                  type='text'
                  name='body'
                  placeholder='Body'
                  onChange={(e) => setBody(e.target.value)}
                  cols='1'
                  rows='5'
                  required
                  aria-required
                />
              </div>
              <div className='form-group'>
                <input
                  type='file'
                  name='uploads'
                  multiple
                  placeholder={fileName}
                  onChange={uploadFileHandler}
                  required
                  aria-required
                />
                {uploadImageLoading && <Spinner />}
              </div>
              <Button
                type='submit'
                to='/'
                buttonSize='btn--wide'
                buttonColor='green'
              >
                Add Post
              </Button>
            </form>
          </>
        )}
      </PostsModal>
    </Overlay>
  )
}

const Overlay = styled.div`
  width: 100vw;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.4);
  overflow: scroll;
`

const PostsModal = styled.div`
  width: 60%;
  min-height: 70vh;
  background: white;
  margin: 10rem auto;
  padding: 3rem;
  border-radius: 10px;
  position: relative;
  overflow: scroll;
  @media (max-width: 768px) {
    width: 80%;
  }
`

const CloseModalBtn = styled.div`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background: #b40606;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 15px;
  right: 15px;
  cursor: pointer;
  &:hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    opacity: 80%;
  }
`

export default AddPostModal
