import styled from "styled-components";

const Wrapper = styled.div`
    padding:1rem;
    display: flex;
    flex-direction: column;
    align-items:flex-start;          // 수직 정렬
    justify-content:flex-start;      // 수평 정렬
    background-color:lightgrey;
`;

const Block= styled.div`
    padding: ${(props) => props.padding};
    // border: 1px dotted black;
    border-radius: 1rem;
    background-color: ${(props) => props.backgroundColor};
    color:black;
    font-size:2rem;
    font-weight:bold;
    text-align: center;
`;

const blockItems = [
    {
        label: "1",
        padding: "1rem",
        backgroundColor: "lightpink",
    },
    {
        label: "2",
        padding: "3rem",
        backgroundColor: "beige",
    },
    {
        label: "3",
        padding: "2rem",
        backgroundColor: "lightblue",
    }
]

function Blocks() {
    return (
        <Wrapper>
            {blockItems.map((blockItem) => {
                return (
                    <Block 
                        padding={blockItem.padding}
                        backgroundColor={blockItem.backgroundColor}>
                            {blockItem.label}
                        </Block>
                );
            })}
        </Wrapper>
    );
}

export default Blocks;