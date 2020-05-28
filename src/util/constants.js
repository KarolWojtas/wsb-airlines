const airlinesAnimationWidth = 1024;
const airlinesAnimationHeight = 500;

export function calcAnimationHeight(width) {
  return (width * airlinesAnimationHeight) / airlinesAnimationWidth;
}
