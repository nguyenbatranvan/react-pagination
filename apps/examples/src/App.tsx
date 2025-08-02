import {Pagination, PaginationWrap, useReactPagination} from "react-headless-pagination";

const App = () => {
    const pagination = useReactPagination({
        totalItem: 100,
        params: {
            limit: 10,
            offset: 0
        },
        onPageChange: () => {

        }
    })
    const disabledClassName = {
        className: "disabled"
    }
    return (
        <div>
            <PaginationWrap {...pagination}>
                <Pagination.Root>
                    <Pagination.First disabledProps={disabledClassName}>
                        fist
                    </Pagination.First>
                    <Pagination.Previous disabledProps={disabledClassName}>
                        prev
                    </Pagination.Previous>
                    <Pagination.Content>
                        {(item) => <>
                            <Pagination.Item className={"base-class"} activeProps={{
                                className: "my-active",
                            }} inactiveProps={{
                                className: "inactive"
                            }}>
                                {item}
                            </Pagination.Item>
                            <Pagination.Dot>
                                ...
                            </Pagination.Dot>
                        </>}
                    </Pagination.Content>
                    <Pagination.Next disabledProps={disabledClassName}>
                        next
                    </Pagination.Next>
                    <Pagination.Last disabledProps={disabledClassName}>
                        last
                    </Pagination.Last>
                </Pagination.Root>
            </PaginationWrap>
        </div>
    );
};

export default App;
