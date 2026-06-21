class Product {
    int productId;
    String productName;
    String category;

    Product(int productId, String productName, String category) {
        this.productId = productId;
        this.productName = productName;
        this.category = category;
    }
}

public class EcommerceSearch {

    // Linear Search
    public static Product linearSearch(Product[] products, int id) {
        for (Product p : products) {
            if (p.productId == id) {
                return p;
            }
        }
        return null;
    }

    // Binary Search
    public static Product binarySearch(Product[] products, int id) {
        int low = 0;
        int high = products.length - 1;

        while (low <= high) {
            int mid = (low + high) / 2;

            if (products[mid].productId == id) {
                return products[mid];
            } else if (products[mid].productId < id) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }
        return null;
    }

    public static void main(String[] args) {

        Product[] products = {
            new Product(101, "Laptop", "Electronics"),
            new Product(102, "Mobile", "Electronics"),
            new Product(103, "Shoes", "Fashion"),
            new Product(104, "Watch", "Accessories"),
            new Product(105, "Bag", "Fashion")
        };

        int searchId = 103;

        Product result1 = linearSearch(products, searchId);

        if (result1 != null) {
            System.out.println("Linear Search Result:");
            System.out.println(result1.productId + " " +
                               result1.productName + " " +
                               result1.category);
        }

        Product result2 = binarySearch(products, searchId);

        if (result2 != null) {
            System.out.println("\nBinary Search Result:");
            System.out.println(result2.productId + " " +
                               result2.productName + " " +
                               result2.category);
        }

        System.out.println("\nTime Complexity:");
        System.out.println("Linear Search -> O(n)");
        System.out.println("Binary Search -> O(log n)");
        System.out.println("Binary Search is more suitable for large datasets.");
    }
}