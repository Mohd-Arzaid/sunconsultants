# 🔧 NGINX Configuration Update - 301 Redirects for Legacy URLs

## 📝 **Current Situation**
- **Old URLs**: `/latest-notification/bis-certificate-for-*`
- **New URLs**: `/bis-qco-updates/bis-certificate-for-*`
- **Problem**: Google crawled old URLs, now showing soft 404 errors

## ✅ **Solution: NGINX 301 Redirects**

Tu already VPS mein logged in hai, ab ye steps follow kar:

### **Step 1: Edit NGINX Config**
```bash
nano /etc/nginx/sites-enabled/bis-certifications.com.conf
```

### **Step 2: Add Redirect Rules**
Ye redirect rules **DEFAULT LOCATION BLOCK SE PEHLE** add karna hai:

```nginx
server {
    server_name bis-certifications.com www.bis-certifications.com;
    root /root/sunconsultants/frontend/dist;
    index index.html;

    # 301 Redirects for Legacy Notification URLs - ADD THIS SECTION
    location ~ ^/latest-notification/bis-certificate-for-(.+)$ {
        return 301 https://bis-certifications.com/bis-qco-updates/bis-certificate-for-$1;
    }
    
    location /latest-notifications {
        return 301 https://bis-certifications.com/bis-qco-updates;
    }
    
    location ~ ^/latest-notification/(.+)$ {
        return 301 https://bis-certifications.com/bis-qco-updates/bis-certificate-for-$1;
    }
    # End of Redirect Rules

    # API Proxy with strict no-cache
    location /api/ {
        # ... (existing config)
    }

    # Rest of your existing config...
}
```

### **Step 3: Test Configuration**
```bash
nginx -t
```

### **Step 4: Reload NGINX**
```bash
systemctl reload nginx
```

### **Step 5: Test Redirects**
```bash
# Test old URL redirect
curl -I "https://bis-certifications.com/latest-notification/bis-certificate-for-storage-units"
# Should return: HTTP/1.1 301 Moved Permanently
```

## 🎯 **Expected Results**

### **Before Fix:**
```
❌ https://bis-certifications.com/latest-notification/bis-certificate-for-storage-units
   → Soft 404 (Empty React page)
```

### **After Fix:**
```
✅ https://bis-certifications.com/latest-notification/bis-certificate-for-storage-units
   → 301 Redirect → https://bis-certifications.com/bis-qco-updates/bis-certificate-for-storage-units
   → Proper content with SEO meta tags
```

## 📊 **Google Search Console Impact**

1. **Immediate (1-3 days):**
   - Old URLs will return proper 301 redirects
   - No more soft 404 errors when Google crawls

2. **Within 1-2 weeks:**
   - Google will update its index
   - Soft 404 count will decrease to 0
   - SEO juice transfers to new URLs

## 🔍 **Why This Works**

- **301 Permanent Redirect** tells Google the page moved permanently
- **SEO juice transfers** from old URL to new URL
- **No duplicate content** issues
- **Backward compatibility** maintained

---

**This is the cleanest solution - pure NGINX redirects without touching React code!** 🚀