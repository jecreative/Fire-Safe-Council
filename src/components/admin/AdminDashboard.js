import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
//* Redux
import { useSelector, useDispatch } from 'react-redux'
import { fetchAllPosts } from '../../redux/actions/postActions'
//* Components
import { Button } from '../layout/Button/Button'
import Spinner from '../layout/Spinner/Spinner'
import AddPostModal from '../layout/Posts/AddPostModal'

const AdminDashboard = () => {
  //* State
  const [showModal, setShowModal] = useState(false)

  const dispatch = useDispatch()
  const { posts, loading, error } = useSelector((state) => state.fetchAllPosts)

  useEffect(() => {
    dispatch(fetchAllPosts())
  }, [dispatch])

  const HandleShowModal = () => {
    setShowModal(true)
    document.body.style.overflow = 'hidden'
  }

  return (
    <>
      {showModal && <AddPostModal setShowModal={setShowModal} />}

      <Dashboard>
        <h2>Admin Dashboard</h2>
        <br />

        <h1>News Posts</h1>
        <Row>
          <Col style={{ flex: 2 }}>
            {loading ? (
              <Spinner />
            ) : (
              <>
                <Table>
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>TITLE</th>
                      <th>DATE</th>

                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {posts &&
                      posts.map((post) => (
                        <tr key={post.id}>
                          <td>{post.id}</td>
                          <td>{post.title}</td>
                          {/* <td>{post.createdAt._seconds}</td> */}
                          <td className='edit-delete-btns'>
                            {/* <LinkContainer
                    to={`/admin/product/${product.productId}/edit`}
                  > */}
                            <EditButton variant='light' className='btn-sm'>
                              <i className='fas fa-edit'></i>
                            </EditButton>
                            <DeleteButton variant='light' className='btn-sm'>
                              <i className='fas fa-trash'></i>
                            </DeleteButton>
                            {/* </LinkContainer> */}
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </Table>
                <Row>
                  <Button
                    buttonColor='green'
                    buttonStyle='btn--primary'
                    onClick={HandleShowModal}
                  >
                    Add new post
                  </Button>
                </Row>
              </>
            )}
          </Col>
          <Col style={{ flex: 1 }}>
            <PostsCount>
              <h3>Number of Posts</h3>
              <PostCountInfo>
                <i className='fas fa-pencil-ruler'></i>
                <h3>{posts && posts.length}</h3>
              </PostCountInfo>
            </PostsCount>
          </Col>
        </Row>
      </Dashboard>
    </>
  )
}

const Dashboard = styled.div`
  width: 100%;
  max-width: 1300px;
  height: 100vh;
  margin: 0 auto;
  padding: 3rem;
  h2 {
    text-decoration: underline;
  }
`
const Row = styled.div`
  width: 100%;
  min-height: 10vh;
  display: flex;
  align-items: flex-start;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
  }
`
const Col = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  overflow-x: scroll;
`
const Table = styled.table`
  width: 100%;
  tr:nth-child(even) {
    background-color: #dad8d8;
  }
  tr:hover {
    background-color: #ddd;
  }
  td,
  th {
    padding: 8px;
  }
  td::last-child,
  th::last-child {
    text-align: right;
  }
  th {
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: left;
    background-color: #356605;
    color: white;
  }
  .edit-delete-btns {
    display: flex;
    align-items: center;
  }
`
const EditButton = styled.button`
  margin: 0 1rem;
  background: transparent;
  color: #0643b4;
  outline: none;
  border: none;
  cursor: pointer;
  &:hover {
    color: rgba(6, 67, 180, 0.4);
  }
`
const DeleteButton = styled.button`
  margin: 0 1rem;
  background: transparent;
  color: #b40606;
  outline: none;
  border: none;
  cursor: pointer;
  &:hover {
    color: rgba(180, 6, 6, 0.4);
  }
`

const PostsCount = styled.div`
  width: 50%;
  min-height: 20vh;
  background: blue;
  color: white;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (max-width: 768px) {
    display: none;
  }
`

const PostCountInfo = styled.div`
  border: 2px solid blue;
  display: flex;
  align-items: center;
  justify-content: center;
  i,
  h3 {
    font-size: 3.5rem;
    margin: 0.25rem;
  }
`

export default AdminDashboard
