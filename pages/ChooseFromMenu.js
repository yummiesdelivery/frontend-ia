import React, { useState } from 'react';
import { View, Text, Image, FlatList, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

const ChooseFromMenu = () => {
  const [favorites, setFavorites] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('Meals');
  const [selectedItems, setSelectedItems] = useState([]); // Estado para las cartas seleccionadas
  const navigation = useNavigation(); // Inicializar el hook de navegación

  const menuItems = [
    { id: '1', name: 'Spicy Noodles', price: 1500, image: require('../assets/beef_salad.png') },
    { id: '2', name: 'Shrimp Pasta', price: 1800, image: require('../assets/shrimp_pasta.png') },
    { id: '3', name: 'Vegetable Curry', price: 1200, image: require('../assets/vegetable_curry.png') },
    { id: '4', name: 'Mixed Salad', price: 1500, image: require('../assets/mixed_salad.png') },
    { id: '5', name: 'Chicken Pasta Salad', price: 1500, image: require('../assets/chicken_pasta_salad.png') },
    { id: '6', name: 'Beef Salad', price: 1200, image: require('../assets/beef_salad.png') },
  ];

  const toggleFavorite = (item) => {
    setFavorites((prev) =>
      prev.includes(item.id) ? prev.filter((favId) => favId !== item.id) : [...prev, item.id]
    );
  };

  const toggleSelectItem = (itemId) => {
    setSelectedItems((prev) =>
      prev.includes(itemId) ? prev.filter((id) => id !== itemId) : [...prev, itemId]
    );
  };

  const renderItem = ({ item }) => {
    const isSelected = selectedItems.includes(item.id);

    return (
      <TouchableOpacity
        style={[styles.card, isSelected && styles.selectedCard]}
        onPress={() => toggleSelectItem(item.id)}
      >
        <Image source={item.image} style={styles.image} />
        <TouchableOpacity onPress={() => toggleFavorite(item)} style={styles.favoriteButton}>
          <Ionicons
            name={favorites.includes(item.id) ? 'heart' : 'heart-outline'}
            size={24}
            color={favorites.includes(item.id) ? '#FF5722' : 'gray'}
          />
        </TouchableOpacity>
        <Text style={styles.itemName}>{item.name}</Text>
        <Text style={styles.itemPrice}>N {item.price}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      {/* Header with Menu and Cart */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.menuIcon}>
          <Ionicons name="menu-outline" size={30} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.cartIcon}>
          <Ionicons name="cart-outline" size={30} color="black" />
        </TouchableOpacity>
      </View>

      {/* "Our Menu" Text */}
      <Text style={styles.title}>Our Menu</Text>

      {/* Scroll View Items */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categories}>
        {['Meals', 'Sides', 'Snacks', 'Drinks', 'Desserts', 'Salad'].map((category) => (
          <TouchableOpacity
            key={category}
            style={[styles.categoryButton, selectedCategory === category && styles.activeButton]}
            onPress={() => setSelectedCategory(category)}
          >
            <Text
              style={[styles.categoryText, selectedCategory === category && styles.activeText]}
            >
              {category}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <FlatList
        data={menuItems}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={styles.menuContainer}
      />

      {/* Bottom Nav Bar */}
      <View style={styles.navbar}>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="chatbubble-ellipses-outline" size={20} color="gray" />
          <Text style={styles.navText}>Live Chat</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="person-outline" size={20} color="gray" />
          <Text style={styles.navText}>Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Home')}>
          <Ionicons name="home-outline" size={20} color="gray" />
          <Text style={styles.navText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="fast-food-outline" size={20} color="#FF5722" />
          <Text style={[styles.navText, { color: '#FF5722' }]}>Menu</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="heart-outline" size={20} color="gray" />
          <Text style={styles.navText}>Favorites</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 5,
    paddingVertical: 5,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  menuIcon: {
    padding: 5,
  },
  cartIcon: {
    padding: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
  },
  categories: {
    flexDirection: 'row',
    paddingVertical: 10,
    marginHorizontal: 10,
  },
  categoryButton: {
    paddingHorizontal: 15,
    paddingVertical: 5,
    marginRight: 10,
    borderRadius: 20,
    backgroundColor: '#f9f9f9',
  },
  activeButton: {
    backgroundColor: '#FF5722',
  },
  categoryText: {
    fontSize: 14,
    color: 'black',
    fontWeight: 'bold',
  },
  activeText: {
    color: 'white',
    fontWeight: 'bold',
  },
  menuContainer: {
    alignItems: 'center',
  },
  card: {
    backgroundColor: '#f9f9f9',
    borderRadius: 20,
    padding: 18,
    marginHorizontal: 10,
    marginVertical: 10,
    alignItems: 'center',
    width: '45%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 5,
  },
  image: {
    width: 90,
    height: 90,
    borderRadius: 10,
  },
  favoriteButton: {
    position: 'absolute',
    top: 4,
    right: 4,
  },
  itemName: {
    fontSize: 14,
    textAlign: 'center',
    marginVertical: 10,
  },
  itemPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderColor: '#ddd',
  },
  navItem: {
    alignItems: 'center',
  },
  navText: {
    fontSize: 12,
    color: 'gray',
    textAlign: 'center',
    marginTop: 4,
  },
});

export default ChooseFromMenu;