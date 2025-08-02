# React Pagination
- This is unstyled/headless pagination for React
- All styling is customizable to you
- Zero dependencies
## Install
`npm i react-headless-paginate`
## Usage

```jsx
import {Pagination, PaginationWrap, useReactPagination} from "react-headless-paginate";

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

```

## Options
### Hooks `useCustomPagination`
#### `totalItems`
-  total count of items for pagination
#### `params`
- `limit`  is the number of items you want to show on each page
- `offset` the default starting item count is `0`
#### `onPageChange`
- when the page changes, this method gets triggered with `params` and `page` included
### Components

#### `activeProps` & `inactiveProps`
- use for `Pagination.Item` to add className and styling for the active current page

#### `disabledProps` use for:
- `Pagination.First`
- `Pagination.Prev`
- `Pagination.Next`
- `Pagination.Last`

This attribute is applied when the user moves to the first page or the last page. If you don't want to use the disabled state, you can omit this `prop`
