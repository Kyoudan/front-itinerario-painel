import { Container } from "../../components/Container";
import { useNavigate } from "react-router";
import { Header } from "./components/Header";
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
import * as S from "./style";
import { AiFillDelete } from "react-icons/ai";
import { Button } from "../../components/Button";
import { useEffect, useState, MouseEvent, useContext } from "react";
import { api } from "../../api/api";
import Cookies from "js-cookie";
import { IAxios, ITags } from "./types";
import { SearchBar } from "../../components/SearchBar";
import { AuthContext } from "../../contexts/AuthContext/AuthContext";

export const Tags = () => {
  const [tags, setTags] = useState<ITags[]>();
  const [page, setPage] = useState<number>(0);
  const [pageNow, setPageNow] = useState<number>(0);
  const [tagsCount, setTagsCount] = useState<number>(0);
  const [search, setSearch] = useState<string>("");
  const [isSearch, setIsSearch] = useState<boolean>(false);
  const [limitFind, setLimitFind] = useState<number>();
  const [height, setHeight] = useState<number>(window.innerHeight);

  const TitleStyle = {
    color: "#ff5c5c",
    fontFamily: "Montserrat",
    fontSize: "1.3em",
  };

  const ContainerStyle = {
    maxHeight: "95%",
    backgroundColor: "#1c1c1c",
  };

  const TableHeadStyle = {
    backgroundColor: "#111111",
  };

  const contentStyle = {
    color: "#fff",
    fontFamily: "Montserrat",
    fontSize: "1.3em",
  };

  const handleGetAllTags = async (count?: number) => {
    try {
      setIsSearch(false);
      console.log(limitFind);
      const result: IAxios = await api.get(
        `/posttags?limit=${limitFind}&init=${
          typeof count === "number" && count! >= 0 ? count : page
        }&find=${search}`,
        {
          headers: {
            Authorization: `${Cookies.get("token")}`,
          },
        }
      );
      console.log(result);
      setTags(result.data.data);
      setTagsCount(result.data.count);
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
          `/posttags?limit=${limitFind}&init=${
            typeof count === "number" && count! >= 0 ? count : page
          }&find=${search}`,
          {
            headers: {
              Authorization: `${Cookies.get("token")}`,
            },
          }
        );
        setTags(result.data.data);
        setTagsCount(result.data.count);
      } else {
        handleGetAllTags();
      }
    } catch {}
  };

  const handleNextPage = () => {
    if (limitFind) {
      let count = page + limitFind;
      setPage(count);
      handleGetAllTags(count);
    }
  };

  const handleBackPage = () => {
    if (limitFind) {
      let count = page - limitFind;
      setPage(count);
      handleGetAllTags(count);
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
  const verifyHeight = () => {
    console.log(height);
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
    verifyHeight();
  }, []);

  useEffect(() => {
    handleGetAllTags();
  }, [limitFind]);

  return (
    <Container>
      <S.styledDiv>
        <Header navigate={useNavigate()} />
        <SearchBar
          text={(e) => setSearch(e.target.value)}
          onClick={handleSeacrhTags}
          widthCard="100%"
          
        />
        {tags && (
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
                    <TableCell sx={TitleStyle}></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {tags &&
                    tags.map((item) => (
                      <TableRow>
                        <TableCell sx={contentStyle}>{item.id}</TableCell>
                        <TableCell sx={contentStyle}>{item.name}</TableCell>
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
                count={tagsCount}
                onPageChange={handleChangePagination}
              />
            )}
          </Paper>
        )}
      </S.styledDiv>
    </Container>
  );
};
