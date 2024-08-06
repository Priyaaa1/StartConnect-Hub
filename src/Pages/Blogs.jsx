import { React, useEffect, useState } from 'react';
import styled from 'styled-components';
import noResultsImage from '../assets/no-results.png'

const Blogs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const allBlogs = [
    {
      title: "Understanding Startups: The Basics",
      date: "June 1, 2024",
      description: "Startups are young companies founded to develop a unique product or service, bring it to market, and make it irresistible and irreplaceable for customers. In this blog, we explore the basics of what startups are and how they operate.",
      link: "/blog/understanding-startups",
      image: "https://t4.ftcdn.net/jpg/02/38/40/55/360_F_238405533_yyX4K55OmH2LiM7LQ01ITn6kl0b6J6K8.jpg",
      tags: ["Startups", "Basics"]
    },
    {
      title: "Investor Insights: What They Look for in a Startup",
      date: "June 15, 2024",
      description: "Investors are always on the lookout for the next big thing. In this blog, we discuss the key factors investors consider when deciding whether to fund a startup.",
      link: "/blog/investor-insights",
      image: "https://analyticsindiamag.com/wp-content/uploads/2020/06/What-Investors-Should-Look-For-In-AI-Startups.jpg",
      tags: ["Investors", "Startups"]
    },
    {
      title: "Effective Networking Tips for Entrepreneurs",
      date: "June 30, 2024",
      description: "Networking is crucial for startup success. This blog provides tips and strategies for entrepreneurs to build and maintain a strong network.",
      link: "/blog/networking-tips",
      image: "https://cdn0.careeraddict.com/uploads/article/59194/illustration-people-networking.jpg",
      tags: ["Networking", "Entrepreneurs"]
    },
    {
      title: "The Role of Technology in Modern Startups",
      date: "July 1, 2024",
      description: "Technology plays a pivotal role in the success of modern startups. In this blog, we examine how startups can leverage technology to gain a competitive edge.",
      link: "/blog/role-of-technology",
      image: "https://www.vbeyonddigital.com/wp-content/uploads/2021/10/VBD-banner-for-blog-870x457.png",
      tags: ["Technology", "Startups"]
    },
    {
      title: "How to Pitch Your Startup to Investors",
      date: "July 15, 2024",
      description: "Pitching your startup to investors can be a daunting task. This blog offers practical tips on how to create a compelling pitch that attracts investors' attention.",
      link: "/blog/pitching-to-investors",
      image: "https://www.challenge.org/wp-content/uploads/2018/06/pitch2-min.jpg",
      tags: ["Pitching", "Investors"]
    }
  ];

  const [blogs, setBlogs] = useState(allBlogs);
  const [search, setSearch] = useState('');
  const [selectedTags, setSelectedTags] = useState([]);

  const handleSearch = (event) => {
    setSearch(event.target.value);
    filterBlogs(event.target.value, selectedTags);
  };

  const handleTagClick = (tag) => {
    const updatedTags = selectedTags.includes(tag)
      ? selectedTags.filter(t => t !== tag)
      : [...selectedTags, tag];

    setSelectedTags(updatedTags);
    filterBlogs(search, updatedTags);
  };

  const filterBlogs = (searchTerm, tags) => {
    const filteredBlogs = allBlogs.filter(blog => {
      const matchesSearch = blog.title.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesTags = tags.length === 0 || tags.every(tag => blog.tags.includes(tag));
      return matchesSearch && matchesTags;
    });
    setBlogs(filteredBlogs);
  };

  const uniqueTags = Array.from(new Set(allBlogs.flatMap(blog => blog.tags)));

  return (
    <BlogsWrapper>
      <h1>Blogs</h1>
      <SearchBar
        type="text"
        value={search}
        onChange={handleSearch}
        placeholder="Search blogs..."
      />
      <TagContainer>
        {uniqueTags.map((tag, index) => (
          <Tag
            key={index}
            onClick={() => handleTagClick(tag)}
            active={selectedTags.includes(tag)}
          >
            {tag}
          </Tag>
        ))}
      </TagContainer>
      <GridContainer>
        {blogs.map((blog, index) => (
          <Card key={index}>
            <ImageContainer>
              <img src={blog.image} alt={blog.title} />
            </ImageContainer>
            <CardContent>
              <h2>{blog.title}</h2>
              <p>Posted on: {blog.date}</p>
              <p>{blog.description}</p>
              <a href={blog.link}>Read more</a>
            </CardContent>
          </Card>
        ))}
      </GridContainer>
      {
        blogs.length === 0 && (
          <NoResultsContainer>
            <NoResultsImage src={noResultsImage} alt="No results found" />
            <NoResultsMessage>Hmmm, We are not getting any results. Our bad - Try another search!</NoResultsMessage>
          </NoResultsContainer>
        )
      }
    </BlogsWrapper>
  );
};

const BlogsWrapper = styled.div`
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
  line-height: 1.6;
  

  h1 {
    font-size: 2.5rem;
    margin-top: 80px;
    text-align: center;
    
  }
`;

const SearchBar = styled.input`
  width: 100%;
  padding: 10px;
  margin: 20px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const TagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 20px;
  justify-content: center;
`;

const Tag = styled.div`
  background-color: ${props => (props.active ? '#212ea0' : '#e0e0e0')};
  color: ${props => (props.active ? '#fff' : '#000')};
  padding: 5px 10px;
  border-radius: 20px;
  margin: 5px;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: #212ea0;
    color: #fff;
  }
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  justify-content: center;
`;

const Card = styled.div`
  background: #ffffff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.2s;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-10px);
  }
`;

const ImageContainer = styled.div`
  flex: 0 0 200px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const CardContent = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;

  h2 {
    font-size: 1.8rem;
    margin-bottom: 10px;
    color: #212ea0;
  }

  p {
    margin: 10px 0;
    color: #555;
    flex-grow: 1;
  }

  a {
    display: inline-block;
    margin-top: 10px;
    color: #212ea0;
    text-decoration: none;
    font-weight: bold;
  }

  a:hover {
    text-decoration: underline;
  }
`;

const NoResultsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  text-align: center;
`;

const NoResultsImage = styled.img`
  width: 150px;
  height: 150px;
  margin-bottom: 20px;
`;

const NoResultsMessage = styled.p`
  font-size: 18px;
  color: #212ea0;
`;

export default Blogs;
