import { StyleSheet, Text, View, Image } from 'react-native'
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import blogActions from '../../redux/actions/blogActions'

export default function BlogsComponents() {

    const dispatch = useDispatch()
    const blogs = useSelector(state => state.blogReducers.blogs)

    useEffect(() => {
        dispatch(blogActions.fetchBlogs())
    }, [])


  return (
    <View>
        <Text style={styles.titleBlogs}>Our News</Text>
    {blogs.map(blog => {
        return (  
        <View key={blog._id}>
        <Text style={styles.titleBlogsC}>{blog.blogTitle}</Text>
        <Image
        style={styles.imagesBlog} 
        source={{uri:`https://lush-plants.herokuapp.com/img/blog/${blog.images}`}}
        />
        <Text style={styles.textBlogsC}>{blog.text}</Text>
        
        </View>
    
        )})}

    </View>
  )
}

const styles = StyleSheet.create({
    titleBlogs: {
        textAlign: 'center',
        fontSize: 30,
        fontWeight: 'bold',
        color: '#083900',
        marginTop: 20,
        marginBottom: 20
    },
    titleBlogsC: {
        fontStyle: 'italic',
        textAlign: 'center',
        padding: 10,
        marginBottom: 20,
        color: '#083900',
        fontSize: 25,
    },
    imagesBlog: {
        width: 350,
        height: 200,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        marginLeft: 25,
    },
    textBlogsC: {
        padding: 16,
        fontSize: 16,
    },
})