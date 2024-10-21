import { Table, Button } from "antd";
import React, { useEffect, useState } from "react";
import { getAllMovies } from "../../calls/Movies";
import { useDispatch, useSelector } from "react-redux";
import loaderSlice, { HideLoading, ShowLoading } from "../../redux/LoaderSlice";
import moment from "moment";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import MovieForm from "./MovieForm";
import DeleteMovieModal from "./DeleteMovieModal";

function MovieList() {
  const dispatch = useDispatch();

  const [formType, setFormType] = useState("add");

  const [selectedMovie, setSelectedMovie] = useState([]);

  // const movies = [
  //   {
  //     key: '1',
  //     poster: 'Image1',
  //     name: 'Mastaney',
  //     description: 'Set in 1739, Nadar Shah`s undefeated army was attacked by Sikh Rebellions. ',
  //     duration: 120,
  //     genre: "Action",
  //     language: "Hindi",
  //     releaseDate: "Oct  25, 2023",
  //   },
  //   {
  //     key: '2',
  //     poster: 'Image2',
  //     name: 'Mastaney',
  //     description: 'Set in 1739, Nadar Shah`s undefeated army was attacked by Sikh Rebellions. ',
  //     duration: 120,
  //     genre: "Action",
  //     language: "Hindi",
  //     releaseDate: "Oct  25, 2023",
  //     action: "Delete"
  //   },
  // ];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const [movies, setMovies] = useState([]);

  const getData = async () => {
    try {
      dispatch(ShowLoading());
      const response = await getAllMovies();
      if (response.success) {
        const allMovies = response.data;
        setMovies(
          allMovies.map((item) => {
            return { ...item, key: `movie${item._id}` };
          })
        );
        dispatch(HideLoading());
      } else {
        message.error(response.message);
      }
    } catch (err) {
      message.error(err);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const tableHeadings = [
    {
      title: "Poster",
      dataIndex: "poster",
      render: (text, data) => {
        return (
          <img
            height="115"
            width="75"
            src={data.poster}
            alt="Movie Poster"
            style={{ objectFit: "cover" }}
          />
        );
      },
    },
    {
      title: "Movie Name",
      dataIndex: "movieName",
    },
    {
      title: "Description",
      dataIndex: "description",
    },
    {
      title: "Duration",
      dataIndex: "duration",
      render: (text) => {
        return `${text} Min`;
      },
    },
    {
      title: "Genre",
      dataIndex: "genre",
    },
    {
      title: "Language",
      dataIndex: "language",
    },
    {
      title: "Release Date",
      dataIndex: "releaseDate",
      render: (text, data) => {
        return moment(data.releaseDate).format("MM-DD-YYYY");
      },
    },
    {
      title: "Action",
      render: (text, data) => {
        return (
          <div>
            <Button
              onClick={() => {
                setIsModalOpen(true);
                setSelectedMovie(data);
                setFormType("edit");
              }}
            >
              <EditOutlined />
            </Button>
            <Button
              onClick={() => {
                setIsDeleteModalOpen(true);
                setSelectedMovie(data);
              }}
            >
              <DeleteOutlined />
            </Button>
          </div>
        );
      },
    },
  ];

  return (
    <div>
      <Button
        onClick={() => {
          setIsModalOpen(true);
          setFormType("add");
        }}
      >
        Add Movie
      </Button>
      <Table dataSource={movies} columns={tableHeadings}></Table>

      {isModalOpen && (
        <MovieForm
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          selectedMovie={selectedMovie}
          formType={formType}
          setSelectedMovie={setSelectedMovie}
        />
      )}

      {isDeleteModalOpen && (
        <DeleteMovieModal
          isDeleteModalOpen = {isDeleteModalOpen}
          setIsDeleteModalOpen = {setIsDeleteModalOpen}
          selectedMovie={selectedMovie}
          setSelectedMovie={setSelectedMovie}
        />
      )}
    </div>
  );
}

export default MovieList;
