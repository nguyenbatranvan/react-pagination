import './App.css';
import {Pagination, PaginationWrap, useCustomPagination} from "react-pagination";

const App = () => {
    const pagination = useCustomPagination({
        totalItem: 100,
        params: {
            limit: 10,
            offset: 0
        },
        onPageChange: () => {

        }
    })
    return (
        <div>
            <PaginationWrap {...pagination}>
                <Pagination.Root>
                    <Pagination.First>
                        fist
                    </Pagination.First>
                    <Pagination.Previous>
                        prev
                    </Pagination.Previous>
                    <Pagination.Content>
                        {(item) => <>
                            <Pagination.Item>
                                {item}
                            </Pagination.Item>
                            <Pagination.Dot>
                                ...
                            </Pagination.Dot>
                        </>}
                    </Pagination.Content>
                    <Pagination.Next>
                        next
                    </Pagination.Next>
                    <Pagination.Last>
                        last
                    </Pagination.Last>
                </Pagination.Root>
            </PaginationWrap>
        </div>
    );
};

export default App;
