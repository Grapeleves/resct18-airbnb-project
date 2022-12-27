import styled from "styled-components"

export const PicWrapper = styled.div`
  position: relative;

  > .picture {
    display: flex;
    height: 600px;
    background-color: #000;

    /*
    当鼠标移动到picture上面，默认将所有的cover的透明度置为1（全部显示遮罩层）
    针对某一个item进行特殊处理，当他处于hover状态时透明度设为0
    */
    &:hover{
      .cover{
        opacity:1 !important ;
      }

      .item:hover{
        .cover{
          opacity:0 !important ;
        }
      }
    }
  }

  .left, .right {
    width: 50%;
    height: 100%;

    .item {
      position: relative;
      height: 100%;
      overflow: hidden;
      cursor: pointer;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;

        transition: transform 0.3s ease-in;
      }

      .cover {
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        background-color: rgba(0,0,0,.2);
        opacity: 0; // 默认不显示
        transition: opacity 200ms ease;
      }
      
      &:hover {
        img {
          transform: scale(1.1);
        }
      }
    }
  }

  .right {
    display: flex;
    flex-wrap: wrap;

    .item {
      width: 50%;
      height: 50%;
      box-sizing: border-box;
      border: 1px solid #000;
    }
  }
`