import { StyleSheet, Text, View, Image, Button } from 'react-native'
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import blogActions from '../../redux/actions/blogActions'

export default function HomeBlogComponent() {

    const dispatch = useDispatch()
    const blogs = useSelector(state => state.blogReducers.blogs)

    useEffect(() => {
        dispatch(blogActions.fetchBlogs())
    }, [])

    // console.log(blogs)

    let blogPost = []
    blogPost.push(blogs[0])
    console.log(blogPost)

  return (

    
    <View>
    {blogPost.map(blog => {
        return (  
        <View key={blog._id}>
        <Text style={styles.title}>Our News</Text>
        <Text style={styles.titleBlog}>{blog.blogTitle}</Text>
        <Image
        style={styles.images} 
        source={{uri:`https://lush-plants.herokuapp.com/img/blog/${blog.images}`}}
        />
        <Text style={styles.textBlog}>{blog.text}</Text>
        <Button
        title="GO TO NEWS"
        />
        </View>
    
        )})}

    </View>
    
  )
}

const styles = StyleSheet.create({
    title: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        color: '#083900',
        marginTop: 20,
        marginBottom: 20
    },
    titleBlog: {
        fontStyle: 'italic',
        textAlign: 'center',
        padding: 10,
        color: '#083900',
        fontSize: 20,
    },
    images: {
        width: 350,
        height: 200,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        marginLeft: 25,
    },
    textBlog: {
        padding: 16,
        fontSize: 16,
    },
})