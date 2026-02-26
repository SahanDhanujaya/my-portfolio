/* eslint-disable react-refresh/only-export-components */
import React from "react";
import gsap from "gsap";
import type { JSX } from "react/jsx-runtime";
import './gallery.scss'
import myPic from '../../../public/assets/pictures/my-pic.png'
interface IUnsplashPhotoUrls {
  full: string;
  regular: string;
  small: string;
  thumbnail: string;
}

interface IUnsplashCreator {
  name: string;
  link: string;
  photo: string;
}

interface IUnsplashPhoto {
  actor: string;
  color: string;
  creator: IUnsplashCreator;
  height: number;
  id: string;
  urls: IUnsplashPhotoUrls;
  width: number;
}

type Orientation = "horizontal" | "vertical";

interface IPosition {
  left: number;
  top: number;
}

interface ISize {
  height: number;
  width: number;
}

interface IPhotoBar {
  backgroundPosition: IPosition;
  position: IPosition;
  rect: DOMRect;
  size: ISize;
}

interface IGalleryUtility {
  getPhotoStyles: (photo: IUnsplashPhoto) => React.CSSProperties;
  mapBarStyles: (bar: IPhotoBar, backgroundImage: string) => React.CSSProperties;
}

const GalleryUtility: IGalleryUtility = {
  getPhotoStyles: (photo: IUnsplashPhoto): React.CSSProperties => {       
    const backgroundImage: string = `url(${photo.urls.regular})`;
    
    const styles: React.CSSProperties = { backgroundImage }
    
    if(photo.width > photo.height) {
      styles.width = "100%";
    } else {
      styles.height = "100%";
    }
    
    return styles;
  },
  mapBarStyles: (bar: IPhotoBar, backgroundImage: string): React.CSSProperties => {       
    const { backgroundPosition, position, rect, size } = bar;
    
    return {
      backgroundImage,
      backgroundPosition: `${backgroundPosition.left * -1}px ${backgroundPosition.top * -1}px`,
      backgroundSize: `${rect.width}px auto`,
      height: `${size.height}px`,
      transform: `translate(${position.left}px, ${position.top}px)`,
      width: `${size.width}px`,
      zIndex: gsap.utils.random(1, 10, 1)
    }
  }
}

interface IPhotoBarProps {
  backgroundImage: string;
  bar: IPhotoBar;
  index: number;
}
const PhotoBar: React.FC<IPhotoBarProps> = (props) => {
  const ctx = React.useContext(AppContext);
  if (!ctx) throw new Error("AppContext not provided");
  const { count, setCountTo } = ctx;

  const { backgroundPosition, position, rect, size } = props.bar;

  const [completed, setCompletedTo] = React.useState<boolean>(false)
  
  const ref = React.useRef<HTMLDivElement | null>(null);
  
  React.useEffect(() => {
    const orientation: Orientation = size.height > size.width ? "vertical" : "horizontal";
    
    const inDuration: number = 4,
          sizeDuration: number = gsap.utils.random(2, inDuration, 1);
    
    const handleOnComplete = (): void => {      
      if(props.index === 0) {
        setCompletedTo(true);
      }
    }
    
    const t1 = gsap.timeline(),
          t2 = gsap.timeline({ onComplete: handleOnComplete });
     
    if(orientation === "vertical") {
      const getOffsetY = (): number => {
        const signY: number = gsap.utils.random(0, 1, 1);
        
        if(signY === 0) {
          return gsap.utils.random(0, position.top - rect.top, 1) * -1;
        }
        
        return gsap.utils.random(0, rect.bottom - (position.top + size.height), 1);
      }
      
      const offsetY: number = getOffsetY(),
            initialY: number = position.top + offsetY,
            initialBackgroundY: number = backgroundPosition.top + offsetY;
        
      if (ref.current) {
        t1.fromTo(ref.current, {
          height: gsap.utils.random(size.height * 0.2, size.height * 0.8, 1),        
          opacity: 0
        }, {
          duration: sizeDuration,
          height: size.height,
          opacity: 1
        }).repeatDelay(inDuration - sizeDuration + 1).yoyo(true).repeat(1);
        
        t2.fromTo(ref.current, {
          backgroundPosition: `${(backgroundPosition.left * -1)}px ${initialBackgroundY * -1}px`,
          y: initialY
        }, {
          backgroundPosition: `${backgroundPosition.left * -1}px ${backgroundPosition.top * -1}px`,
          duration: inDuration,
          y: position.top
        }).repeatDelay(1).yoyo(true).repeat(1);
      }
    } else {
      const getOffsetX = (): number => {
        const signX: number = gsap.utils.random(0, 1, 1);
        
        if(signX === 0) {
          return gsap.utils.random(0, position.left - rect.left, 1) * -1;
        }
        
        return gsap.utils.random(0, rect.right - (position.left + size.width), 1);
      }
      
      const offsetX: number = getOffsetX(),
            initialX: number = position.left + offsetX,
            initialBackgroundX = backgroundPosition.left + offsetX;
      
      if (ref.current) {
        t1.fromTo(ref.current, {
          opacity: 0,
          width: gsap.utils.random(size.width * 0.2, size.width * 0.8, 1)
        }, {
          duration: sizeDuration,   
          opacity: 1,
          width: size.width
        }).repeatDelay(inDuration - sizeDuration + 1).yoyo(true).repeat(1);
          
        t2.fromTo(ref.current, {
          backgroundPosition: `${initialBackgroundX * -1}px ${(backgroundPosition.top * -1)}px`,
          x: initialX
        }, {
          backgroundPosition: `${backgroundPosition.left * -1}px ${backgroundPosition.top * -1}px`,
          duration: inDuration,
          x: position.left
        }).repeatDelay(1).yoyo(true).repeat(1);
      }
    }
    
    return () => {
      t1.kill();
      t2.kill();
    }
  }, [backgroundPosition, position, rect, size, props.index]);
  
  React.useEffect(() => {
    if(completed) {
      setCountTo(count + 1);
    }
  }, [completed, count, setCountTo]);
  
  return (
    <div ref={ref} className="photo-bar" style={GalleryUtility.mapBarStyles(props.bar, props.backgroundImage)} />
  );
}

interface ICastMemberProps {
  actor: string;
}

const CastMember: React.FC<ICastMemberProps> = (props: ICastMemberProps) => {
  const ref = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    if (!ref.current) return;

    gsap.fromTo(ref.current, { opacity: 0, x: -300 }, { duration: 3, delay: 1, ease: "power3.out", opacity: 1, x: 0 });

    gsap.to(ref.current, {
      delay: 5,
      duration: 4,
      ease: "power3.in",
      opacity: 0,
      x: 300
    });
  }, [props.actor]);

  return (
    <div ref={ref} id="gallery-cast-member">
      <h1>{props.actor}</h1>
    </div>
  );
}

interface IGalleryState {
  bars: IPhotoBar[];
  loaded: boolean;
}

const defaultGalleryState = (): IGalleryState => ({
  bars: [],
  loaded: false
});

interface IGalleryProps {
  photo: IUnsplashPhoto;
}

const Gallery: React.FC<IGalleryProps> = (props: IGalleryProps) => {
  const ctx = React.useContext(AppContext);
  if (!ctx) throw new Error("AppContext not provided");
  const { count } = ctx;
  
  const [state, setStateTo] = React.useState<IGalleryState>(defaultGalleryState());

  const photoStyles: React.CSSProperties = GalleryUtility.getPhotoStyles(props.photo);
  
  const photoRef = React.useRef<HTMLImageElement | null>(null);
  
  React.useEffect(() => {    
    setStateTo(defaultGalleryState());
  }, [count]);
  
  React.useEffect(() => {
    const image: HTMLImageElement = new Image();

    image.src = props.photo.urls.regular;

    image.onload = () => {
      setStateTo(prev => ({ ...prev, loaded: true }));
    };
  }, [props.photo]);
  
  React.useEffect(() => {
    if(state.loaded) {
      const bars: IPhotoBar[] = [];

      if (!photoRef.current) return;
      const rect: DOMRect = photoRef.current.getBoundingClientRect();

      const base: IPosition = {
        left: rect.left + (rect.width * 0.2),
        top: rect.top
      }
      
      while(base.left < (rect.left + (rect.width * 0.7))) {
        const height: number = gsap.utils.random(rect.height * 0.4, rect.height * 0.8, 1),
              width: number = gsap.utils.random(rect.width * 0.05, rect.width * 0.25, 1);

        const left: number = gsap.utils.random(base.left + (width * 0.1), base.left + (width * 0.2), 1),
              top: number = base.top + gsap.utils.random(0, rect.height - height , 1);

        base.left = left + width;
        
        const backgroundPosition: IPosition = {
          left: left - rect.left,
          top: top - rect.top
        }

        bars.push({
          backgroundPosition,
          position: { left, top },
          rect,
          size: { height, width }
        });
      }

      base.left = rect.left;
      base.top = rect.top + (rect.height * 0.2);

      while(base.top < (rect.top + (rect.height * 0.7))) {
        const height: number = gsap.utils.random(rect.height * 0.05, rect.height * 0.25, 1),
              width: number = gsap.utils.random(rect.width * 0.4, rect.width * 0.8, 1);

        const left: number = base.left + gsap.utils.random(0, rect.width - width , 1),
              top: number = gsap.utils.random(base.top + (height * 0.1), base.top + (height * 0.2), 1);

        base.top = top + height;

        const backgroundPosition: IPosition = {
          left: left - rect.left,
          top: top - rect.top
        }
        
        bars.push({
          backgroundPosition,
          position: { left, top },
          rect,
          size: { height, width }
        });
      }
      
      setStateTo(prev => ({ ...prev, bars }));
    }
  }, [state.loaded]);
  
  const getBars = (): JSX.Element[] => {
    return state.bars.map((bar: IPhotoBar, index: number) => (
      <PhotoBar 
        key={index} 
        backgroundImage={photoStyles.backgroundImage as unknown as string} 
        bar={bar} 
        index={index} 
      />
    ));
  }

  return(
    <div id="gallery-wrapper">
      <div id="gallery-frame">
        <div id="gallery-photo-wrapper">
          <img 
            key={props.photo.id} 
            id="gallery-photo" 
            ref={photoRef} 
            src={props.photo.urls.regular}
            style={photoStyles} 
          />
        </div>
      </div>
      <div id="gallery-photo-bars">
        {getBars()}
      </div>
      <CastMember actor={props.photo.actor} />
    </div>
  )
}

interface IAppContext {
  count: number;
  setCountTo: (count: number) => void;
}

const AppContext = React.createContext<IAppContext | null>(null);

// Placeholder photos array to ensure the component has at least one image.
// Replace this with real Unsplash data or an import as needed.
const photos: IUnsplashPhoto[] = [
  {
    actor: "Your Name",
    color: "#000",
    creator: { name: "You", link: "", photo: myPic },
    height: 600,
    id: "photo-1",
    urls: {
      full: myPic,
      regular: myPic,
      small: myPic,
      thumbnail: myPic
    },
    width: 800
  }
];

export const HeroGallery: React.FC = () => {
  const [index, setIndexTo] = React.useState<number>(0),
        [count, setCountTo] = React.useState<number>(0),
        [resizing, setResizingTo] = React.useState<boolean>(false);
  
  const photo: IUnsplashPhoto = photos[index];
  
  React.useEffect(() => {
    const timeout: ReturnType<typeof setTimeout> = setTimeout(() => {
      if(!resizing && count > 0) {
        setIndexTo(index + 1 > photos.length - 1 ? 0 : index + 1);
      }
    }, 1000);
    
    return () => clearTimeout(timeout);
  }, [count]);
  
  React.useEffect(() => {
    const handleOnResize = (): void => {
      if(!resizing) {
        setResizingTo(true);
      }
    }
    
    const timeout: ReturnType<typeof setTimeout> = setTimeout(() => {
      if(resizing) {
        setResizingTo(false);
      }
    }, 500);
    
    window.addEventListener("resize", handleOnResize);
    
    return () => {
      window.removeEventListener("resize", handleOnResize);
      
      clearTimeout(timeout);
    }
  }, [resizing]);
  
  const getGallery = (): JSX.Element | null => {
    if(!resizing && photo) {
      return <Gallery photo={photo} />;
    }

    return null;
  }
  
  return(
    <AppContext.Provider value={{ count, setCountTo }}>
      <div id="app">
        {getGallery()}
      </div>
    </AppContext.Provider>
  )
}