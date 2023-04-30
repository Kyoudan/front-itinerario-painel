import { useEffect, useState, useContext, MouseEvent } from "react";
import { api } from "../../api/api";
import { IHandleViewPosts, IPostContent, IPosts } from "./types";
import { Header } from "./components/Header";
import * as S from "./styles";
import { SearchBar } from "../../components/SearchBar";
import { Button } from "../../components/Button";
import { BsFillBrushFill } from "react-icons/bs";
import { AuthContext } from "../../contexts/AuthContext/AuthContext";
import { Container } from "../../components/Container";
import { useNavigate } from "react-router";
import {
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableBody,
  Paper,
  TablePagination,
  Table,
} from "@mui/material";
import { AiFillDelete } from "react-icons/ai";
import Cookies from "js-cookie";

export const Postagens = () => {
  const [posts, setPosts] = useState<IPosts[]>([]);
  const [loading, setLoading] = useState(false);
  const { cellphone } = useContext(AuthContext);
  const navigate = useNavigate();
  const { user, VerifyToken } = useContext(AuthContext);
  const [page, setPage] = useState<number>(0);
  const [pageNow, setPageNow] = useState<number>(0);
  const [postsCount, setPostsCount] = useState<number>(0);
  const [search, setSearch] = useState<string>("");
  const [isSearch, setIsSearch] = useState<boolean>(false);
  const [limitFind, setLimitFind] = useState<number>();
  const [height, setHeight] = useState<number>(window.innerHeight);

  const TitleStyle = {
    color: "#ff5c5c",
    fontFamily: "Montserrat",
    fontSize: "1.5em",
  };

  const ContainerStyle = {
    maxHeight: "85%",
    maxWidth: "100%",
    minWidth: "100%",
    backgroundColor: "#1c1c1c",
  };

  const TableHeadStyle = {
    backgroundColor: "#111111",
  };

  const contentStyle = {
    color: "#fff",
    fontFamily: "Montserrat",
    fontSize: "1.1em",
  };

  const handleGetAllPosts = async (count?: number) => {
    try {
      setLoading(true);
      setIsSearch(false);
      const result = await api.get(
        `/post?limit=${limitFind}&init=${
          typeof count === "number" && count! >= 0 ? count : page
        }&find=${search}`,
        {
          headers: {
            Authorization: `${Cookies.get("token")}`,
          },
        }
      );
      setPosts(result.data.data);
      setPostsCount(result.data.count);
      setLoading(false);
    } catch {}
  };

  const handleSeacrhPosts = async (
    e: MouseEvent<HTMLButtonElement>,
    count?: number
  ) => {
    try {
      if (search) {
        setIsSearch(true);
        console.log(search);
        const result = await api.get(
          `/post?limit=${limitFind}&init=${
            typeof count === "number" && count! >= 0 ? count : page
          }&find=${search}`,
          {
            headers: {
              Authorization: `${Cookies.get("token")}`,
            },
          }
        );
        setPosts(result.data.data);
        setPostsCount(result.data.count);
      } else {
        handleGetAllPosts();
      }
    } catch {}
  };

  const handleNextPage = () => {
    if (limitFind) {
      let count = page + limitFind;
      setPage(count);
      handleGetAllPosts(count);
    }
  };

  const handleBackPage = () => {
    if (limitFind) {
      let count = page - limitFind;
      setPage(count);
      handleGetAllPosts(count);
    }
  };

  const handleChangePagination = (e: unknown, page: number) => {
    if (pageNow < page) {
      setPageNow(page);
      handleNextPage();
    } else if (pageNow > page) {
      setPageNow(page);
      handleBackPage();
    }
  };

  const handleViewPost = (link: IHandleViewPosts) => {
    console.log(link);
    navigate(`/postagens/${link.route}`);
  };

  const verifyHeight = () => {
    if (height > 900) {
      setLimitFind(7);
    } else if (height > 881) {
      setLimitFind(6);
    } else if (height < 881 && height > 801) {
      setLimitFind(5);
    } else if (height < 801 && height > 701) {
      setLimitFind(4);
    } else if (height < 801 && height > 610) {
      setLimitFind(3);
    } else if (height < 601 && height > 500) {
      setLimitFind(2);
    } else if (height < 500 && height > 400) {
      setLimitFind(1);
    }
  };

  useEffect(() => {
    VerifyToken();
    verifyHeight();
  }, []);

  useEffect(() => {
    handleGetAllPosts();
  }, [limitFind]);

  return user ? (
    <Container>
      <S.styledDiv>
        <Header navigate={useNavigate()} />
        <SearchBar
          text={(e) => setSearch(e.target.value)}
          onClick={handleSeacrhPosts}
          widthCard="100%"
        />

        {loading ? (
          <S.styledLoading cellphone={cellphone}>
            <Button
              width="60px"
              backgroundColor="transparent"
              border="none"
              sizeLoading={100}
              isLoading={true}
              colorLoading="#000"
              justifyContent="center"
            />
          </S.styledLoading>
        ) : (
          <Paper
            sx={{ width: "90%", overflow: "hidden", marginTop: "50px" }}
            elevation={10}
            square
            variant="outlined"
          >
            <TableContainer sx={ContainerStyle}>
              <Table>
                <TableHead sx={TableHeadStyle}>
                  <TableRow>
                    <TableCell sx={TitleStyle}>ID</TableCell>
                    <TableCell sx={TitleStyle}>Nome</TableCell>
                    <TableCell sx={TitleStyle}>Descrição</TableCell>
                    <TableCell sx={TitleStyle} align="center">
                      Ações
                    </TableCell>
                    <TableCell sx={TitleStyle}></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {posts &&
                    posts.map((item) => (
                      <TableRow>
                        <TableCell sx={contentStyle}>{item.id}</TableCell>
                        <TableCell sx={contentStyle}>{item.name}</TableCell>
                        <TableCell sx={contentStyle}>
                          {item.description}
                        </TableCell>
                        <TableCell align="right">
                          <Button
                            Icon={() => <AiFillDelete size={30} />}
                            width="50px"
                            height="50px"
                            borderRadius="50%"
                            background="#ff3939"
                            justifyContent="center"
                            border="0"
                            boxShadowHover="0px 0px 10px 1px #ff3939"
                          />
                        </TableCell>

                        <TableCell>
                          <Button
                            width="50px"
                            height="50px"
                            background="#ff3939"
                            boxShadowHover="0px 0px 10px 1px #ff3939"
                            justifyContent="center"
                            borderRadius="50%"
                            border="none"
                            onClick={() => handleViewPost({ route: item.uuid })}
                            Icon={() => <BsFillBrushFill />}
                          />
                        </TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </TableContainer>
            {!isSearch && limitFind && (
              <TablePagination
                rowsPerPageOptions={[limitFind]}
                component="div"
                rowsPerPage={limitFind}
                page={pageNow}
                count={postsCount}
                onPageChange={handleChangePagination}
              />
            )}
          </Paper>
        )}
      </S.styledDiv>
    </Container>
  ) : (
    navigate("/")
  );
};
