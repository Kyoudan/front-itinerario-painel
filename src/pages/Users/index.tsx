import { Container } from "../../components/Container";
import { Header } from "./components/Header";
import { useNavigate } from "react-router";
import * as S from "./style";
import { useState, useEffect, MouseEvent } from "react";
import Cookies from "js-cookie";
import { SearchBar } from "../../components/SearchBar";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from "@mui/material";
import { Button } from "../../components/Button";
import { AiFillDelete } from "react-icons/ai";
import { IAxios, IUsers } from "./types";
import { api } from "../../api/api";
import { Message } from "../../components/Message";

export const Users = () => {
  const [users, setUsers] = useState<IUsers[]>();
  const [page, setPage] = useState<number>(0);
  const [pageNow, setPageNow] = useState<number>(0);
  const [postCount, setPostCount] = useState<number>(0);
  const [search, setSearch] = useState<string>("");
  const [isSearch, setIsSearch] = useState<boolean>(false);

  const TitleStyle = {
    color: "#ff5c5c",
    fontFamily: "Montserrat",
    fontSize: "1.9em",
  };

  const ContainerStyle = {
    maxHeight: "100%",
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
    fontSize: "1.5em",
  };

  const handleGetAllTags = async (count?: number) => {
    try {
      setIsSearch(false);
      const result: IAxios = await api.get(
        `/users?limit=7&init=${
          typeof count === "number" && count! >= 0 ? count : page
        }&find=${search}`,
        {
          headers: {
            Authorization: `${Cookies.get("token")}`,
          },
        }
      );
      setUsers(result.data.data);
      setPostCount(result.data.count);
    } catch {}
  };

  const handleSeacrhTags = async (
    e: MouseEvent<HTMLButtonElement>,
    count?: number
  ) => {
    try {
      if (search) {
        setIsSearch(true);
        const result: IAxios = await api.get(
          `/users?limit=7&init=${
            typeof count === "number" && count! >= 0 ? count : page
          }&find=${search}`,
          {
            headers: {
              Authorization: `${Cookies.get("token")}`,
            },
          }
        );
        setUsers(result.data.data);
        setPostCount(result.data.count);
      } else {
        handleGetAllTags();
      }
    } catch {}
  };

  const handleNextPage = () => {
    let count = page + 7;
    setPage(count);
    handleGetAllTags(count);
  };

  const handleBackPage = () => {
    let count = page - 7;
    setPage(count);
    handleGetAllTags(count);
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

  useEffect(() => {
    handleGetAllTags();
  }, []);

  return (
    <Container>
      <S.styledDiv>
        <Header navigate={useNavigate()} />
        <SearchBar
          text={(e) => setSearch(e.target.value)}
          onClick={handleSeacrhTags}
          widthCard="100%"
        />
        {users && (
          <Paper
            sx={{ width: "90%", overflow: "hidden", marginTop: "50px" }}
            elevation={10}
            square
            variant="outlined"
          >
            <Message message="Usuarios" />
            <TableContainer sx={ContainerStyle}>
              <Table>
                <TableHead sx={TableHeadStyle}>
                  <TableRow>
                    <TableCell sx={TitleStyle}>ID</TableCell>
                    <TableCell sx={TitleStyle}>Nome</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {users &&
                    users.map((item) => (
                      <TableRow>
                        <TableCell sx={contentStyle}>{item.id}</TableCell>
                        <TableCell sx={contentStyle}>{item.name}</TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </TableContainer>
            {!isSearch && (
              <TablePagination
                rowsPerPageOptions={[7]}
                component="div"
                rowsPerPage={7}
                page={pageNow}
                count={postCount}
                onPageChange={handleChangePagination}
              />
            )}
          </Paper>
        )}
      </S.styledDiv>
    </Container>
  );
};
